const CACHE = 'dezasseis-v2';
const STATIC = ['/', '/index.html', '/manifest.json', '/icon-192.png', '/icon-512.png', '/icon-maskable-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(STATIC)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // Network-only for API calls
  if (url.pathname.startsWith('/api/')) return;

  // Runtime cache-first for audio files
  if (url.pathname.startsWith('/audio/')) {
    e.respondWith(
      caches.open(CACHE).then(async c => {
        const cached = await c.match(e.request);
        if (cached) return cached;
        try {
          const r = await fetch(e.request);
          if (r.ok) c.put(e.request, r.clone());
          return r;
        } catch (err) {
          return new Response('Audio not available offline', { status: 503 });
        }
      })
    );
    return;
  }

  // Cache-first for everything else
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
