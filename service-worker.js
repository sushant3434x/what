self.addEventListener("install", e => {
  self.skipWaiting();
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.open("shein-cache").then(cache =>
      cache.match(e.request).then(r => r || fetch(e.request))
    )
  );
});

