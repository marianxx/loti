// Perform install steps
var CACHE_NAME = 'loti-v1';
var urlsToCache = [
    'css/style.css',
    'f/fonts.css',
    'f/SamsungOne-300.woff',
    'f/SamsungOne-400.woff',
    'f/SamsungOne-600.woff',
    'f/SamsungOne-700.woff',
    'f/SamsungOne-800.woff',
    'i/chrome96.png',
    'i/egde96.png',
    'i/firefox96.png',
    'i/opera96.png',
    'i/safari96.png',
    'i/sbrowser96.png',
    'i/close.png',
    'i/lotibg.png',
    'i/lotiicon192.png',
    'i/lotiicon512.png',
    'i/samsungInternetLogo.svg',
    'js/loti.js',
    'index.html',
    'manifest.json'
];

self.addEventListener('install', function(event) {
// Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function(cache) {
            console.log('Opened cache');
        return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

self.addEventListener('activate', function(event) {

  var cacheWhitelist = ['loti-v1'];

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});