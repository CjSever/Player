// Внимание: ваши данные могут отличаться!
// const CACHE_NAME = 'your-super-game-name-v1.0.3';
// const cacheList = [
//     'https://yandex.ru/games/sdk/v2',
//     'index.html',
//     'example.js'
// ];

const addResourcesToCache = async (resources) => {
    const cache = await caches.open('v1');
    await cache.addAll(resources);
  };
  
  const putInCache = async (request, response) => {
    const cache = await caches.open('v1');
    await cache.put(request, response);
  };

self.addEventListener('activate', (event) => {
    console.log('Активирован');
});


self.addEventListener('install', (event) => {
    console.log('Установлен');
    event.waitUntil(
      caches.open('v1').then((cache) => {
        return cache.addAll([
            './',
            './index.html',
            './Style/StyleAudioPlayer.css',
            './app.js',

            './Control',
            './Control/CheckBrowser.js',
            './Control/ControlPlayer.js',
            './Control/ReplaceBlockAudioPlayer.js',
            
            './img',
            './img/vol_level_1.png',
            './img/vol_level_2.png',
            './img/vol_level_3.png',
            './img/vol_level_mute.png'
        ]);
      })
    );
  });

self.addEventListener('fetch', (event) => {
    console.log('Происходит запрос на сервер');
});