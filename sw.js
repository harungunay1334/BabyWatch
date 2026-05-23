const CACHE_NAME = 'babywatch-v1';
const ASSETS = [
  './index.html',
  './manifest.json'
];

// Service Worker Kurulumu ve Önbellekleme
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// İstekleri Yakalama ve Yanıt Verme
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
