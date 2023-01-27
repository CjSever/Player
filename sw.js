// Внимание: ваши данные могут отличаться!
// const CACHE_NAME = 'your-super-game-name-v1.0.3';
// const cacheList = [
//     'https://yandex.ru/games/sdk/v2',
//     'index.html',
//     'example.js'
// ];

// self.addEventListener('install', (event) => {
//     console.log('Установлен');
// });

self.addEventListener('activate', (event) => {
    console.log('Активирован');
});

self.addEventListener('install', (event) => {
    
    console.log('Установлен');

    event.waitUntil(
      addResourcesToCache([
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
      ])
    );
  });


self.addEventListener('fetch', (event) => {
    console.log('Происходит запрос на сервер');
});