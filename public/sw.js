// Service Worker for La Empresa PWA
const CACHE_NAME = 'laempresa-cache-v1';

// Assets to cache immediately when service worker installs
const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/404.html',
  '/manifest.json',
  '/assets/images/laempresa.png',
  '/assets/hero-bg.webp'
];

// Install event - precache static assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Service Worker: Caching files');
        return cache.addAll(PRECACHE_ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log('Service Worker: Deleting old cache', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('Service Worker: Activated');
      return self.clients.claim();
    })
  );
});

// Network first, falling back to cache strategy
// This ensures users get fresh content when online, but can still use the app offline
self.addEventListener('fetch', event => {
  // Skip non-GET requests and requests to other origins
  if (event.request.method !== 'GET' || !event.request.url.startsWith(self.location.origin)) {
    return;
  }
  
  // For HTML pages (navigation), use network first then cache
  if (event.request.headers.get('accept').includes('text/html')) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          // Clone the response to use it and store it
          const responseClone = response.clone();
          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseClone);
            });
          return response;
        })
        .catch(() => {
          return caches.match(event.request)
            .then(response => {
              // Return cached HTML, or fallback to offline page
              return response || caches.match('/404.html');
            });
        })
    );
    return;
  }
  
  // For JS/CSS/images, try cache first, then network
  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        // Return cached response if available
        if (cachedResponse) {
          return cachedResponse;
        }
        
        // Otherwise fetch from network
        return fetch(event.request)
          .then(response => {
            // Don't cache responses that aren't successful
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            
            // Clone the response to use it and store it
            const responseClone = response.clone();
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseClone);
              });
            
            return response;
          });
      })
  );
});

// Background sync for offline form submissions
self.addEventListener('sync', event => {
  if (event.tag === 'contact-form-submission') {
    event.waitUntil(syncContactForm());
  }
});

// Push notification event handler
self.addEventListener('push', event => {
  const data = event.data.json();
  
  const options = {
    body: data.body || 'New notification from La Empresa',
    icon: '/assets/images/laempresa.png',
    badge: '/assets/images/laempresa.png',
    vibrate: [100, 50, 100],
    data: {
      url: data.url || '/'
    }
  };
  
  event.waitUntil(
    self.registration.showNotification(
      data.title || 'La Empresa Notification', 
      options
    )
  );
});

// Notification click event - open the app at the right page
self.addEventListener('notificationclick', event => {
  event.notification.close();
  
  if (event.notification.data && event.notification.data.url) {
    event.waitUntil(
      clients.openWindow(event.notification.data.url)
    );
  }
});

// Helper function to send cached contact form data
async function syncContactForm() {
  const dataFromIDB = await getContactFormDataFromIDB();
  
  if (dataFromIDB && dataFromIDB.length > 0) {
    for (const formData of dataFromIDB) {
      try {
        // Attempt to send the form data
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
        
        if (response.ok) {
          // Remove successfully sent data from IDB
          await removeContactFormDataFromIDB(formData.id);
        }
      } catch (error) {
        console.error('Error syncing contact form:', error);
        // We'll retry on the next sync event
      }
    }
  }
}

// IndexedDB functions (simplified - would need actual implementation)
function getContactFormDataFromIDB() {
  // Simplified placeholder - would actually query IndexedDB
  return Promise.resolve([]);
}

function removeContactFormDataFromIDB(id) {
  // Simplified placeholder - would actually remove from IndexedDB
  return Promise.resolve();
} 