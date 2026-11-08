var C='baubudget-v13';
var F=['./','./index.html','./manifest.webmanifest','./icon-180.png','./icon-192.png','./icon-512.png'];
self.addEventListener('install',function(e){e.waitUntil(caches.open(C).then(function(c){return c.addAll(F)}).then(function(){return self.skipWaiting()}));});
self.addEventListener('activate',function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(n){return n!==C}).map(function(n){return caches.delete(n)}))}).then(function(){return self.clients.claim()}));});
self.addEventListener('fetch',function(e){
  var r=e.request;if(r.method!=='GET')return;
  e.respondWith(fetch(r).then(function(res){var c2=res.clone();if(res.ok)caches.open(C).then(function(c){c.put(r,c2)});return res;}).catch(function(){return caches.match(r)}));
});
