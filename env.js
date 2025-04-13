// This script replaces environment variables in the built HTML/JS files
const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, 'dist');

// Load environment variables
const env = {
  VITE_EMAILJS_SERVICE_ID: process.env.VITE_EMAILJS_SERVICE_ID || '',
  VITE_EMAILJS_TEMPLATE_ID: process.env.VITE_EMAILJS_TEMPLATE_ID || '',
  VITE_EMAILJS_PUBLIC_KEY: process.env.VITE_EMAILJS_PUBLIC_KEY || ''
};

// Function to process a file and replace environment variables
function processFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace each environment variable
  Object.keys(env).forEach(key => {
    const regex = new RegExp(`process\\.env\\.${key}|import\\.meta\\.env\\.${key}`, 'g');
    content = content.replace(regex, `"${env[key]}"`);
  });
  
  fs.writeFileSync(filePath, content);
}

// Process all JS files in the dist/assets directory
function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  
  files.forEach(file => {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (file.endsWith('.js')) {
      processFile(filePath);
    }
  });
}

// Start processing
processDirectory(path.join(distDir, 'assets'));
console.log('Environment variables replaced in build files'); 