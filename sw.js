const CACHE_NAME = 'ra-evangelicos-v2';
const assetsToCache = [
'index.html',
'manifest.json',
'logo-192.png',
'logo-512.png',
'biblia-king-james.html',
'biblia-obreiro.html',
'biblia-mulher.html',
'harpa.html',
'bolsas.html',
'saias.html',
'ternos.html'
];

self.addEventListener('install', event => {
event.waitUntil(
caches.open(CACHE_NAME).then(cache => {
return cache.addAll(assetsToCache);
})
);
});

self.addEventListener('fetch', event => {
event.respondWith(
caches.match(event.request).then(response => {
return response || fetch(event.request);
})
);
});
