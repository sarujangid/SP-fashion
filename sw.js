// Install event
self.addEventListener('install', event => {
    console.log('Service Worker: Installed');
    event.waitUntil(
        caches.open('fancy-store-cache')
        .then(cache => {
            console.log('Caching files...');
            cache.addAll([
                'index.html',
                'style.css',
                'app.js',
                'manifest.json',
                'icon-192.png',
                'icon-512.png'
            ]);
        })
    );
});

// Activate event
self.addEventListener('activate', event => {
    console.log('Service Worker: Activated');
});

// Fetch event (offline support)
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
        .then(response => response || fetch(event.request))
    );
});
