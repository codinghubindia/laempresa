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

console.log('Environment variables to be injected:');
console.log('Service ID available:', !!process.env.VITE_EMAILJS_SERVICE_ID);
console.log('Template ID available:', !!process.env.VITE_EMAILJS_TEMPLATE_ID);
console.log('Public Key available:', !!process.env.VITE_EMAILJS_PUBLIC_KEY);

// Generate a script tag to inject the environment variables globally
const generateEnvScript = () => {
  return `
<script>
// Injected environment variables
window.VITE_EMAILJS_SERVICE_ID = "${env.VITE_EMAILJS_SERVICE_ID}";
window.VITE_EMAILJS_TEMPLATE_ID = "${env.VITE_EMAILJS_TEMPLATE_ID}";
window.VITE_EMAILJS_PUBLIC_KEY = "${env.VITE_EMAILJS_PUBLIC_KEY}";
console.log("Environment variables injected globally");
</script>
  `;
};

// Function to process a file and replace environment variables
async function processFile(filePath) {
  try {
    const fileExists = await fs.stat(filePath).catch(() => false);
    if (!fileExists) return;
    
    let content = await fs.readFile(filePath, 'utf8');
    
    // Replace each environment variable in JS files
    if (filePath.endsWith('.js')) {
      Object.keys(env).forEach(key => {
        const regex = new RegExp(`process\\.env\\.${key}|import\\.meta\\.env\\.${key}`, 'g');
        content = content.replace(regex, `"${env[key]}"`);
      });
    }
    
    // Inject script tag with environment variables in HTML files
    if (filePath.endsWith('.html')) {
      // Add the script to the head of the HTML file
      content = content.replace('</head>', `${generateEnvScript()}</head>`);
    }
    
    await fs.writeFile(filePath, content);
    console.log(`Processed: ${filePath}`);
  } catch (error) {
    console.error(`Error processing file ${filePath}:`, error);
  }
}

// Process all JS files in the dist/assets directory
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

// Start processing
async function main() {
  try {
    // Process both the assets directory and the root dist directory
    await processDirectory(distDir);
    console.log('Environment variables replaced in build files');
  } catch (error) {
    console.error('Failed to process files:', error);
    process.exit(1);
  }
}

main(); 