import { lazy, ComponentType } from 'react';
import { preloadImage } from './assetUtils';

interface PageImportOptions {
  priority: 'critical' | 'high' | 'medium' | 'low';
  preloadComponents?: boolean;
  preloadImages?: string[];
}

/**
 * Optimized page loading with granular control over loading behavior
 * @param importer Function that imports the page component
 * @param options Optimization options
 * @returns Lazy-loaded component with optimized loading behavior
 */
export function optimizePage<T extends ComponentType<any>>(
  importer: () => Promise<{ default: T }>,
  options: PageImportOptions
) {
  // Set loading delay based on priority
  const minDelay = 
    options.priority === 'critical' ? 0 :
    options.priority === 'high' ? 100 :
    options.priority === 'medium' ? 300 : 600;
  
  // Preload any required images for the page using the optimized utility
  if (options.preloadImages && options.preloadImages.length > 0) {
    // Use requestIdleCallback for non-critical images
    if (typeof window !== 'undefined') {
      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(() => {
          options.preloadImages?.forEach(imagePath => {
            preloadImage(imagePath);
          });
        }, { timeout: 2000 });
      } else {
        // Fallback for browsers without requestIdleCallback
        setTimeout(() => {
          options.preloadImages?.forEach(imagePath => {
            preloadImage(imagePath);
          });
        }, 1000);
      }
    }
  }
  
  return lazy(() => {
    // Create a timestamp for performance measurement
    const startTime = performance.now();
    
    // Start the import
    return importer()
      .then(module => {
        // Calculate how long the import took
        const loadTime = performance.now() - startTime;
        
        // Only delay low priority pages if needed (prevents flickering)
        if (options.priority !== 'critical' && loadTime < minDelay) {
          return new Promise(resolve => {
            setTimeout(() => {
              resolve(module);
            }, minDelay - loadTime);
          });
        }
        
        // Log performance metrics in development
        if (process.env.NODE_ENV === 'development') {
          console.log(`[Page Load] ${module.default.name || 'Component'} loaded in ${loadTime.toFixed(2)}ms`);
        }
        
        return module;
      })
      .catch(error => {
        console.error(`Failed to load page:`, error);
        throw error;
      });
  });
}

/**
 * Preload specified page components at a later time after initial render
 * @param importers List of import functions to preload
 * @param delay Delay in ms before starting preload
 */
export function preloadPages(
  importers: Array<() => Promise<any>>,
  delay = 2000
) {
  if (typeof window === 'undefined') return;
  
  setTimeout(() => {
    importers.forEach(importFn => {
      // Execute the import function directly
      importFn().catch(err => {
        // Silently ignore errors in preloading
        console.debug(`Preloading module failed:`, err);
      });
    });
  }, delay);
}

/**
 * Track page navigation and performance
 * @param pageName Name of the page being navigated to
 */
export function trackPageNavigation(pageName: string) {
  // Mark navigation start
  performance.mark(`page-${pageName}-start`);
  
  // Create a navigation entry
  if (typeof window !== 'undefined') {
    // Log the navigation event (for analytics or monitoring)
    console.debug(`Navigated to ${pageName}`);
    
    // Report to analytics if available
    // window.gtag?.('event', 'page_view', { page_title: pageName });
    
    // When the page is fully loaded, mark the end
    window.addEventListener('load', () => {
      performance.mark(`page-${pageName}-end`);
      performance.measure(`page-${pageName}-load`, 
        `page-${pageName}-start`, 
        `page-${pageName}-end`);
    });
  }
} 