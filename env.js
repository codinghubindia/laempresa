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

// Function to process a file and replace environment variables
async function processFile(filePath) {
  try {
    const fileExists = await fs.stat(filePath).catch(() => false);
    if (!fileExists) return;
    
    let content = await fs.readFile(filePath, 'utf8');
    
    // Replace each environment variable
    Object.keys(env).forEach(key => {
      const regex = new RegExp(`process\\.env\\.${key}|import\\.meta\\.env\\.${key}`, 'g');
      content = content.replace(regex, `"${env[key]}"`);
    });
    
    await fs.writeFile(filePath, content);
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
      } else if (file.endsWith('.js')) {
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
    const assetsDir = path.join(distDir, 'assets');
    await processDirectory(assetsDir);
    console.log('Environment variables replaced in build files');
  } catch (error) {
    console.error('Failed to process files:', error);
    process.exit(1);
  }
}

main(); 