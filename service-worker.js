const CACHE_VERSION = 'v1';
const CACHE_FILES = [
    '/index.html',
    '/contact.html',
    '/assets/css/main.css',
    '/assets/js/index.js',
    '/assets/img/144.png',
    '/assets/img/why-us-bg.jpg',
    '/assets/img/hero-bg.jpg',
    '/assets/vendor/swiper/swiper-bundle.min.js',
    '/assets/vendor/swiper/swiper-bundle.min.css',
    '/assets/vendor/bootstrap/css/bootstrap.min.css',
    '/assets/vendor/bootstrap/js/bootstrap.bundle.min.js',
    '/assets/vendor/aos/aos.css',
    '/assets/vendor/aos/aos.js',
    '/assets/vendor/glightbox/css/glightbox.min.css',
    '/assets/vendor/glightbox/js/glightbox.min.js',
    '/assets/vendor/remixicon/remixicon.css',
    '/assets/vendor/bootstrap-icons/bootstrap-icons.css',
    '/assets/vendor/isotope-layout/isotope.pkgd.min.js',
    '/assets/vendor/php-email-form/validate.js'
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
