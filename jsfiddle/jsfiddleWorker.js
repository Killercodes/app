self.addEventListener("install", e => {
    e.waitUntil(
      caches.open("static").then(cache => {
        return cache.addAll(['./','/style.css']);
      })
    );
  });

  self.addEventListener("fetch", e => {
      //console.log(`intercepting fetch Request for: ${e.request.url}`);
    
    e.respondWith(
      caches.match(e.request).then(res => {
        return res || fetch(e.request);
      })
    );
    
  });

// inside service worker script
self.addEventListener('error', function(e) {
  console.log(e.filename, e.lineno, e.colno, e.message);
});