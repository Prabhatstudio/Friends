// Simple offline cache so music/images stay available after first load.
const CACHE_NAME = "bff-lotus-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./assets/music/song1.mp3",
  "./assets/music/song2.mp3",
  "./assets/music/song3.mp3",
  "./assets/icons/icon-192.png",
  "./assets/icons/icon-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
      .catch(() => {})
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
    )).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => {
      return cached || fetch(event.request).then((resp) => {
        // Cache same-origin GETs
        try{
          const url = new URL(event.request.url);
          if(event.request.method === "GET" && url.origin === self.location.origin){
            const copy = resp.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy)).catch(()=>{});
          }
        }catch(e){}
        return resp;
      }).catch(() => cached);
    })
  );
});
