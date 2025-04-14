/**
 * Environment variable processor for build output
 * Replaces placeholder variables in built files with actual values
 */

const fs = require('fs');
const path = require('path');

// Get environment variables from process.env
const envVars = {
  EMAILJS_SERVICE_ID: process.env.VITE_EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID: process.env.VITE_EMAILJS_TEMPLATE_ID,
  EMAILJS_PUBLIC_KEY: process.env.VITE_EMAILJS_PUBLIC_KEY,
};

// Validate required environment variables
const missingVars = Object.entries(envVars)
  .filter(([_, value]) => !value)
  .map(([key]) => key);

if (missingVars.length > 0) {
  console.error(`Error: Missing required environment variables: ${missingVars.join(', ')}`);
  process.exit(1);
}

// Directory where the build output is located
const buildDir = './dist';

// Process JS files to replace any remaining ENV variables
function processJSFiles(directory) {
  const files = fs.readdirSync(directory, { withFileTypes: true });
  
  files.forEach(file => {
    const filePath = path.join(directory, file.name);
    
    if (file.isDirectory()) {
      processJSFiles(filePath);
      return;
    }
    
    // Only process JS files
    if (!file.name.endsWith('.js')) return;
    
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;
      
      // Replace all environment variables
      Object.entries(envVars).forEach(([key, value]) => {
        // Look for patterns like "process.env.VITE_EMAILJS_SERVICE_ID" or import.meta.env.VITE_EMAILJS_SERVICE_ID
        const processEnvPattern = new RegExp(`process\\.env\\.VITE_${key}`, 'g');
        const importMetaPattern = new RegExp(`import\\.meta\\.env\\.VITE_${key}`, 'g');
        
        if (content.match(processEnvPattern) || content.match(importMetaPattern)) {
          content = content
            .replace(processEnvPattern, `"${value}"`)
            .replace(importMetaPattern, `"${value}"`);
          modified = true;
        }
      });
      
      // Write back the file if it was modified
      if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ Processed environment variables in: ${filePath}`);
      }
    } catch (error) {
      console.error(`❌ Error processing file ${filePath}:`, error);
    }
  });
}

// Main process
console.log('Processing environment variables in build files...');
processJSFiles(buildDir);
console.log('Finished processing environment variables'); 