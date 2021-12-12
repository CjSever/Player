'use strict'
let 
    main_block_audio_player = document.getElementById('mainAudioPlayerBlock'),
    div_external = document.createElement('div'),
    div_inner = document.createElement('div'),
    p_one = document.createElement('p'),
    p_two = document.createElement('p');
    div_external.id = 'temporary__container_external';
    div_inner.id = 'temporary__container_inner';
    p_one.id = 'temporary__text_one';
    p_two.id = 'temporary__text_two';

if(getInternetExplorerVersion()!==-1){

    // Если IE');
    // console.log('it is IE');
        main_block_audio_player.innerHTML = '';
        add_Block_alert_impossibleAudioPlayer();
} else {
    // Если не IE');
    // console.log('it is dont IE');
}

function add_Block_alert_impossibleAudioPlayer(){

main_block_audio_player.appendChild(div_external);
    temporary__container_external.style.display = 'flex';
    temporary__container_external.style.justifyContent = 'Center';
    temporary__container_external.style.alignItems = 'Center';
    temporary__container_external.style.width = '100%';
    temporary__container_external.style.height = '100%';
    temporary__container_external.style.border = '1px solid red';

temporary__container_external.appendChild(div_inner);
    temporary__container_inner.style.width = '60%';
    temporary__container_inner.style.height = '100%';

temporary__container_inner.appendChild(p_one);
    p_one.innerText = 'Функционал данного браузера устарел';
    temporary__text_one.style.fontSize = '3rem';
    temporary__text_one.style.textAlign = 'Center';
    p_one.style.color = 'red';

temporary__container_inner.appendChild(p_two);
    p_two.innerText = 'Аудио плеер не поддерживается!!!';
    temporary__text_two.style.fontSize = '3rem';
    temporary__text_two.style.textAlign = 'Center';
    p_two.style.color = 'red';
}