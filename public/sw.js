var CACHE_NAME = 'todolist';
var urlsToCache = [
  '/144.png',
  'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.2/css/bulma.min.css',
  '/static/js/bundle.js',
  '/favicon.ico',
  '/index.html',
  '/'
];

// Install a service worker
self.addEventListener('install', event => {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Cache and return requests
this.addEventListener("fetch", event => {
    if (event.request.method != 'GET')
    return;
  event.waitUntil((async () => {
    // some IndexedDB stuff which works fine
  })());
    event.respondWith((async () => {
        const cachedResponse = await caches.match(event.request);
        if (cachedResponse) {
          return cachedResponse;
        }
        const response = await fetch(event.request);
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }
        return response;
      })());
});

// Update a service worker
self.addEventListener('activate', event => {
  var cacheWhitelist = ['todolist'];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});