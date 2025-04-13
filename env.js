// This script replaces environment variables in the built HTML/JS files
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.join(__dirname, 'dist');

// Hardcoded EmailJS credentials
const HARDCODED_CREDENTIALS = {
  VITE_EMAILJS_SERVICE_ID: 'service_wrmc1ui',
  VITE_EMAILJS_TEMPLATE_ID: 'template_oo6sj7l',
  VITE_EMAILJS_PUBLIC_KEY: 'CTUNxPC5QKaMYmT3K'
};

// Load environment variables with fallback to hardcoded values
const env = {
  VITE_EMAILJS_SERVICE_ID: process.env.VITE_EMAILJS_SERVICE_ID || HARDCODED_CREDENTIALS.VITE_EMAILJS_SERVICE_ID,
  VITE_EMAILJS_TEMPLATE_ID: process.env.VITE_EMAILJS_TEMPLATE_ID || HARDCODED_CREDENTIALS.VITE_EMAILJS_TEMPLATE_ID,
  VITE_EMAILJS_PUBLIC_KEY: process.env.VITE_EMAILJS_PUBLIC_KEY || HARDCODED_CREDENTIALS.VITE_EMAILJS_PUBLIC_KEY
};

// If any keys are empty, use hardcoded values
if (!env.VITE_EMAILJS_SERVICE_ID) {
  env.VITE_EMAILJS_SERVICE_ID = HARDCODED_CREDENTIALS.VITE_EMAILJS_SERVICE_ID;
}
if (!env.VITE_EMAILJS_TEMPLATE_ID) {
  env.VITE_EMAILJS_TEMPLATE_ID = HARDCODED_CREDENTIALS.VITE_EMAILJS_TEMPLATE_ID;
}
if (!env.VITE_EMAILJS_PUBLIC_KEY) {
  env.VITE_EMAILJS_PUBLIC_KEY = HARDCODED_CREDENTIALS.VITE_EMAILJS_PUBLIC_KEY;
}

// Generate a script tag to inject the environment variables globally
const generateEnvScript = () => {
  return `
<script>
// Injected environment variables
window.VITE_EMAILJS_SERVICE_ID = "service_wrmc1ui";
window.VITE_EMAILJS_TEMPLATE_ID = "template_oo6sj7l";
window.VITE_EMAILJS_PUBLIC_KEY = "CTUNxPC5QKaMYmT3K";
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
        // Add a more direct approach by finding ESM imports and adding our variables
        if (content.includes('import.meta.env')) {
          const directVariablesCode = `
// Directly injected EmailJS config
const _EMAILJS_SERVICE_ID = "service_wrmc1ui";
const _EMAILJS_TEMPLATE_ID = "template_oo6sj7l";
const _EMAILJS_PUBLIC_KEY = "CTUNxPC5QKaMYmT3K";
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
        content = content.replace(regex, `"${HARDCODED_CREDENTIALS[key]}"`);
        
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
window.VITE_EMAILJS_SERVICE_ID = "service_wrmc1ui";
window.VITE_EMAILJS_TEMPLATE_ID = "template_oo6sj7l";
window.VITE_EMAILJS_PUBLIC_KEY = "CTUNxPC5QKaMYmT3K";
`;

  await fs.writeFile(configFilePath, configContent);
  
  // Add script tag to index.html
  const indexHtmlPath = path.join(distDir, 'index.html');
  let indexHtml = await fs.readFile(indexHtmlPath, 'utf8');
  if (!indexHtml.includes('emailjs-config.js')) {
    indexHtml = indexHtml.replace(
      '</head>',
      `<script src="/emailjs-config.js"></script></head>`
    );
    await fs.writeFile(indexHtmlPath, indexHtml);
  }
}

// Start processing
async function main() {
  try {
    // Process both the assets directory and the root dist directory
    await processDirectory(distDir);
    
    // Create a separate config file to be sure
    await createConfigFile();
  } catch (error) {
    console.error('Failed to process files:', error);
    process.exit(1);
  }
}

main(); 