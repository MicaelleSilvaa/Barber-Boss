const CACHE_VERSION = 'v1';
const CACHE_FILES = [
    '/index.html',
    '/assets/css/main.css',
    '/index.js',
    '/assets/img/144.png',
    '/assets/img/why-us-bg.jpg',
    '/assets/img/hero-bg.jpg',
    '/assets/vendor/bootstrap/css/bootstrap.min.css',
    '/assets/vendor/bootstrap-icons/bootstrap-icons.css',
    '/assets/vendor/aos/aos.css',
    '/assets/vendor/glightbox/css/glightbox.min.css',
    '/assets/vendor/swiper/swiper-bundle.min.css',
    '/assets/vendor/remixicon/remixicon.css',
    './'
];

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(CACHE_VERSION).then(function (cache) {
            return cache.addAll(CACHE_FILES);
        })
    );
});

self.addEventListener('activate', function (event) {
    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.map(function (cacheName) {
                    if (cacheName !== CACHE_VERSION) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request).then(function (response) {
            if (response) {
                return response;
            }
            return fetch(event.request);
        })
    );
});
