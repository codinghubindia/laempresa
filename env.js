// This script replaces environment variables in the built HTML/JS files
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.join(__dirname, 'dist');

// Load environment variables
const env = {
  VITE_EMAILJS_SERVICE_ID: process.env.VITE_EMAILJS_SERVICE_ID || '',
  VITE_EMAILJS_TEMPLATE_ID: process.env.VITE_EMAILJS_TEMPLATE_ID || '',
  VITE_EMAILJS_PUBLIC_KEY: process.env.VITE_EMAILJS_PUBLIC_KEY || ''
};

// Print current environment variables for debugging
console.log('Environment variables to be injected:');
console.log('Service ID:', env.VITE_EMAILJS_SERVICE_ID || '(empty)');
console.log('Template ID:', env.VITE_EMAILJS_TEMPLATE_ID || '(empty)');
console.log('Public Key:', env.VITE_EMAILJS_PUBLIC_KEY || '(empty)');

// If any keys are empty, try to load from .env file directly as fallback
if (!env.VITE_EMAILJS_SERVICE_ID || !env.VITE_EMAILJS_TEMPLATE_ID || !env.VITE_EMAILJS_PUBLIC_KEY) {
  try {
    console.log('Attempting to load from .env file as fallback...');
    const envFile = await fs.readFile(path.join(__dirname, '.env'), 'utf8');
    const envLines = envFile.split('\n');
    
    for (const line of envLines) {
      if (line.trim() && !line.startsWith('#')) {
        const [key, value] = line.split('=');
        if (key && value && key in env) {
          env[key] = value.trim();
          console.log(`Loaded ${key} from .env file: ${value.trim()}`);
        }
      }
    }
  } catch (error) {
    console.error('Error loading from .env file:', error.message);
  }
}

// If still empty, use hardcoded values as last resort
if (!env.VITE_EMAILJS_SERVICE_ID) {
  env.VITE_EMAILJS_SERVICE_ID = 'service_wrmc1ui';
  console.log('Using hardcoded Service ID as fallback');
}
if (!env.VITE_EMAILJS_TEMPLATE_ID) {
  env.VITE_EMAILJS_TEMPLATE_ID = 'template_oo6sj7l';
  console.log('Using hardcoded Template ID as fallback');
}
if (!env.VITE_EMAILJS_PUBLIC_KEY) {
  env.VITE_EMAILJS_PUBLIC_KEY = 'CTUNxPC5QKaMYmT3K';
  console.log('Using hardcoded Public Key as fallback');
}

// Generate a script tag to inject the environment variables globally
const generateEnvScript = () => {
  return `
<script>
// Injected environment variables
window.VITE_EMAILJS_SERVICE_ID = "${env.VITE_EMAILJS_SERVICE_ID}";
window.VITE_EMAILJS_TEMPLATE_ID = "${env.VITE_EMAILJS_TEMPLATE_ID}";
window.VITE_EMAILJS_PUBLIC_KEY = "${env.VITE_EMAILJS_PUBLIC_KEY}";
console.log("Environment variables injected globally", {
  service: window.VITE_EMAILJS_SERVICE_ID,
  template: window.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: window.VITE_EMAILJS_PUBLIC_KEY
});
</script>
  `;
};

// Function to process a file and replace environment variables
async function processFile(filePath) {
  try {
    const fileExists = await fs.stat(filePath).catch(() => false);
    if (!fileExists) return;
    
    let content = await fs.readFile(filePath, 'utf8');
    let madeChanges = false;
    
    // Replace each environment variable in JS files
    if (filePath.endsWith('.js')) {
      // Check if this file contains EmailJS code
      const containsEmailJS = content.includes('emailjs') || 
                               content.includes('EmailJS') || 
                               content.includes('VITE_EMAILJS');
                               
      if (containsEmailJS) {
        console.log(`Found EmailJS-related code in: ${filePath}`);
        
        // Add a more direct approach by finding ESM imports and adding our variables
        if (content.includes('import.meta.env')) {
          const directVariablesCode = `
// Directly injected EmailJS config
const _EMAILJS_SERVICE_ID = "${env.VITE_EMAILJS_SERVICE_ID}";
const _EMAILJS_TEMPLATE_ID = "${env.VITE_EMAILJS_TEMPLATE_ID}";
const _EMAILJS_PUBLIC_KEY = "${env.VITE_EMAILJS_PUBLIC_KEY}";
`;
          
          // Add after the imports
          const importEndIndex = content.lastIndexOf('import ') + 500;
          const insertPosition = content.indexOf(';', importEndIndex) + 1;
          
          if (insertPosition > 0) {
            content = content.slice(0, insertPosition) + 
                     directVariablesCode + 
                     content.slice(insertPosition);
            madeChanges = true;
          }
        }
      }
      
      // Regular replacement for all JS files
      Object.keys(env).forEach(key => {
        const originalContent = content;
        const regex = new RegExp(`import\\.meta\\.env\\.${key}|process\\.env\\.${key}`, 'g');
        content = content.replace(regex, `"${env[key]}"`);
        
        if (originalContent !== content) {
          madeChanges = true;
        }
      });
    }
    
    // Inject script tag with environment variables in HTML files
    if (filePath.endsWith('.html')) {
      const originalContent = content;
      // Add the script to the head of the HTML file
      content = content.replace('</head>', `${generateEnvScript()}</head>`);
      
      if (originalContent !== content) {
        madeChanges = true;
      }
    }
    
    if (madeChanges) {
      await fs.writeFile(filePath, content);
      console.log(`✅ Processed: ${filePath}`);
      
      // If this is the main JS file, verify the content
      if (filePath.includes('index') && filePath.endsWith('.js')) {
        console.log(`Verifying EmailJS variables in ${filePath}...`);
        const serviceIdFound = content.includes(env.VITE_EMAILJS_SERVICE_ID);
        const templateIdFound = content.includes(env.VITE_EMAILJS_TEMPLATE_ID);
        const publicKeyFound = content.includes(env.VITE_EMAILJS_PUBLIC_KEY);
        
        console.log(`Service ID found: ${serviceIdFound}`);
        console.log(`Template ID found: ${templateIdFound}`);
        console.log(`Public Key found: ${publicKeyFound}`);
      }
    }
  } catch (error) {
    console.error(`Error processing file ${filePath}:`, error);
  }
}

// Process all JS and HTML files in the dist directory
async function processDirectory(directory) {
  try {
    const files = await fs.readdir(directory);
    
    for (const file of files) {
      const filePath = path.join(directory, file);
      const stat = await fs.stat(filePath);
      
      if (stat.isDirectory()) {
        await processDirectory(filePath);
      } else if (file.endsWith('.js') || file.endsWith('.html')) {
        await processFile(filePath);
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${directory}:`, error);
  }
}

// Create a direct EmailJS config file in dist folder
async function createConfigFile() {
  const configFilePath = path.join(distDir, 'emailjs-config.js');
  const configContent = `
// EmailJS configuration file - created at build time
window.VITE_EMAILJS_SERVICE_ID = "${env.VITE_EMAILJS_SERVICE_ID}";
window.VITE_EMAILJS_TEMPLATE_ID = "${env.VITE_EMAILJS_TEMPLATE_ID}";
window.VITE_EMAILJS_PUBLIC_KEY = "${env.VITE_EMAILJS_PUBLIC_KEY}";
console.log("EmailJS config loaded from separate file");
`;

  await fs.writeFile(configFilePath, configContent);
  console.log(`Created EmailJS config file at ${configFilePath}`);
  
  // Add script tag to index.html
  const indexHtmlPath = path.join(distDir, 'index.html');
  let indexHtml = await fs.readFile(indexHtmlPath, 'utf8');
  if (!indexHtml.includes('emailjs-config.js')) {
    indexHtml = indexHtml.replace(
      '</head>',
      `<script src="/emailjs-config.js"></script></head>`
    );
    await fs.writeFile(indexHtmlPath, indexHtml);
    console.log('Added EmailJS config script to index.html');
  }
}

// Start processing
async function main() {
  try {
    // Process both the assets directory and the root dist directory
    await processDirectory(distDir);
    
    // Create a separate config file to be sure
    await createConfigFile();
    
    console.log('✅ Environment variables replaced in build files');
  } catch (error) {
    console.error('Failed to process files:', error);
    process.exit(1);
  }
}

main(); 