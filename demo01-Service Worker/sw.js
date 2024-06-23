// 监听install事件并缓存所需文件
var CACHE_NAME = 'sw-cache';
var CACHE_URLS = ['./index.html', './index.js', './public/equal.png', './public/icon.png'];
self.addEventListener('install', e => {
    self.skipWaiting();  /* 跳过等待状态并尽快替代旧的SW进入活动状态 */
    e.waitUntil(
        caches.open(CACHE_NAME)		// 打开缓存
        .then(cache => cache.addAll(CACHE_URLS))
    )
})

// 监听activate事件
self.addEventListener('activate', e => {
    e.waitUntil()
})

// 拦截请求，如果缓存中有所需的资源，直接输出；
self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request)
        .then(res => {
            if (res) {
                return res;
            }
            console.log('loaded from sw')
        })
    )
})
