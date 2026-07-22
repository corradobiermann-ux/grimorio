const CACHE_NAME = 'grimorio-v1';
const urlsToCache = [
  './',
  './index.html',
  './incantesimi_chierico.json',
  './header.jpg',
  './sfondo.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});