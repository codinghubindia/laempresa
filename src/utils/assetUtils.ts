/**
 * Asset utilities for handling assets and preventing 404 errors
 */

// Base64 encoded 1x1 transparent pixel - used as fallback for missing images
export const BLANK_PIXEL = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';

/**
 * Gets the correct path for an asset from the assets directory
 * @param path - The relative path to the asset
 * @returns The corrected path
 */
export function getAssetPath(path: string): string {
  // Ensure path starts with ./ for relative assets
  if (!path.startsWith('./') && !path.startsWith('/')) {
    return `./${path}`;
  }
  return path;
}

/**
 * Preloads an image with a fallback to a blank pixel if the image is missing
 * @param src - The source of the image to preload
 * @returns A promise that resolves when the image is loaded
 */
export function preloadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve) => {
    const img = new Image();
    
    img.onload = () => resolve(img);
    img.onerror = () => {
      // Use blank pixel as fallback
      img.src = BLANK_PIXEL;
      resolve(img);
    };
    
    img.src = getAssetPath(src);
  });
}

/**
 * Preloads multiple images in parallel
 * @param srcs - Array of image sources to preload
 * @returns A promise that resolves when all images are loaded
 */
export function preloadImages(srcs: string[]): Promise<HTMLImageElement[]> {
  return Promise.all(srcs.map(preloadImage));
}

/**
 * Creates an inline SVG image data URL - useful for placeholder content
 * @param color - The fill color of the SVG
 * @param width - The width of the SVG
 * @param height - The height of the SVG
 * @returns A data URL containing the SVG
 */
export function createPlaceholderSVG(color = '#0069d9', width = 100, height = 100): string {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
      <rect width="${width}" height="${height}" fill="${color}" opacity="0.7" />
      <text x="50%" y="50%" font-family="sans-serif" font-size="14" text-anchor="middle" fill="#ffffff">Image</text>
    </svg>
  `;
  
  return `data:image/svg+xml;base64,${btoa(svg)}`;
}

/**
 * Ensures all assets needed for the app are available, provides fallbacks if not
 */
export function ensureAssets(): void {
  try {
    // Critical images that should be preloaded
    const criticalAssets = [
      'assets/images/laempresa.png',
      'assets/hero-bg.webp',
      'assets/about-hero.webp',
      'assets/services-hero.webp'
    ];
    
    // Preload all critical assets with fallback support
    preloadImages(criticalAssets).then(() => {
      console.debug('Critical assets preloaded successfully');
    });
  } catch (error) {
    console.error('Error ensuring assets:', error);
  }
} 