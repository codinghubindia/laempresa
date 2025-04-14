/**
 * Development environment asset helper
 * This script ensures that assets are available during development mode
 * It creates placeholders for any missing assets to prevent 404 errors
 */

(function() {
  // Only run in development mode
  if (window.location.hostname !== 'localhost' && !window.location.hostname.includes('127.0.0.1')) {
    return;
  }
  
  console.log('DevAssets: Initializing development asset support');
  
  // Base64 encoded 1x1 transparent pixel
  const BLANK_PIXEL = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';
  
  // Placeholder SVG for missing images
  const placeholderSVG = (text = 'Image', color = '#0069d9', size = 100) => {
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
        <rect width="${size}" height="${size}" fill="${color}" opacity="0.7" />
        <text x="50%" y="50%" font-family="sans-serif" font-size="14" text-anchor="middle" fill="#ffffff">${text}</text>
      </svg>
    `;
    return `data:image/svg+xml;base64,${btoa(svg)}`;
  };
  
  // Critical assets that must be available
  const criticalAssets = [
    './assets/images/laempresa.png',
  ];
  
  // Create placeholder images
  criticalAssets.forEach((src, index) => {
    const img = new Image();
    img.src = src;
    img.onerror = () => {
      console.debug(`DevAssets: Creating placeholder for ${src}`);
      
      // Create a placeholder element
      const placeholderImg = document.createElement('img');
      placeholderImg.src = placeholderSVG(`Asset ${index + 1}`, '#0069d9', 100);
      placeholderImg.style.display = 'none';
      placeholderImg.id = `dev-asset-${index}`;
      placeholderImg.dataset.originalSrc = src;
      
      // Add to DOM
      document.body.appendChild(placeholderImg);
      
      // Override fetch for this URL to return our placeholder
      const originalFetch = window.fetch;
      window.fetch = function(input, init) {
        if (input === src) {
          return new Promise((resolve) => {
            // Create a response with our placeholder
            fetch(placeholderImg.src)
              .then(response => response.blob())
              .then(blob => {
                resolve(new Response(blob, {
                  status: 200,
                  statusText: 'OK',
                  headers: new Headers({
                    'Content-Type': 'image/svg+xml'
                  })
                }));
              });
          });
        }
        return originalFetch(input, init);
      };
    };
  });
  
  // Create a fake service worker registration response if needed
  if ('serviceWorker' in navigator) {
    const originalRegister = navigator.serviceWorker.register;
    navigator.serviceWorker.register = function(scriptURL, options) {
      if (scriptURL.includes('sw.js')) {
        console.debug('DevAssets: Creating mock service worker registration');
        return Promise.resolve({
          scope: window.location.origin,
          update: () => Promise.resolve(),
          unregister: () => Promise.resolve(true),
          active: null,
          installing: null,
          waiting: null,
        });
      }
      return originalRegister.call(this, scriptURL, options);
    };
  }
})(); 