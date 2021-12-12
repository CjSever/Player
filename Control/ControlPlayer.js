'use strict'
let
    audio = document.getElementById('audio'),
    btn_play = document.getElementById('a_play'),
    VolValue = document.getElementById('VolValue'),
    volume = document.getElementById('a__toddler_volume'),
    fxSpin = document.getElementById('fx_spinner'),
    previousCurrentVolume = 0,
    curent_color_toddler_status = false,
    playBackInterval, r,

    icVLevel3 = document.getElementById('icon__vol_level3'),
    icVLevel2 = document.getElementById('icon__vol_level2'),
    icVLevel1 = document.getElementById('icon__vol_level1'),
    icVLevelMute = document.getElementById('icon__vol_levelMute'),
    icVLevelArray = document.getElementsByClassName('icon__vol'),

    getValueAtrib_volume = {
        min_volume: '',
        max_volume: '',
        step_volume: '',
        value_volume: '',
        currentValue_volume: '',
    },

    // xhr = new XMLHttpRequest(),
    // link = audio.attributes[0].textContent,

    btn_stop = document.getElementById('a_stop');
    btn_play.style.visibility = 'visible';

    icVLevelArray[0,1,2,3].style.opacity = '1';
    icVLevel3.style.visibility = 'visible';
    icVLevel3.style.display = 'flex';

    volume.attributes[5].value = 100;
    VolValue.innerText = volume.attributes[5].value;

    volume.style.background = "linear-gradient(90deg, rgba(37,89,179,0.586) 100%, rgba(255,255,255,1) 100%, rgba(255,255,255,1) 100%)";
    // volume.attributes[0].nodeName = onmouseup;

function get_value_atrib_volume(){

        getValueAtrib_volume = {
                min_volume: volume.attributes[2].value,
                max_volume: volume.attributes[3].value,
                step_volume: volume.attributes[4].value,
                value_volume: volume.attributes[5].value,
        };

    return (getValueAtrib_volume);
} 

function fx_playBack_spinner(playBack){

let r=0;

    if (playBack===true){
        playBackInterval = setInterval(() => {
            if (r==360){
                r = 0;
                fxSpin.style.transform = 'rotate(0deg)';
            } else {
                fxSpin.style.transform = 'rotate('+(++r)+'deg)';
            }
        }, 10);
    } else if (playBack===false){
        setTimeout(() => {
            clearInterval(playBackInterval);
            fxSpin.style.transform = 'rotate(0deg)';
        }, 20);
    }

}

function control__audio_play(){

    if (audio.paused){
        audio.play();
        btn_play.style.visibility = 'hidden';
        btn_stop.style.visibility = 'visible';

        fx_playBack_spinner(true);

    } else if (audio.played){
        audio.pause();
        btn_play.style.visibility = 'visible';
        btn_stop.style.visibility = 'hidden';

        fx_playBack_spinner(false);

    }
}

function check__iconVolume(){

    if (volume.value>=75){
        icVLevel3.style.visibility = 'visible';
        icVLevel3.style.opacity = '1';
        VolValue.style.opacity = '1';
        icVLevel3.style.display = 'flex';
        icVLevel2.style.visibility = icVLevel1.style.visibility = icVLevelMute.style.visibility = 'hidden';
        icVLevel2.style.display = icVLevel1.style.display = icVLevelMute.style.display = 'none';

    } else if (volume.value<75 && volume.value>=50) {
        icVLevel2.style.visibility = 'visible';
        icVLevel2.style.opacity = '0.8';
        VolValue.style.opacity = '0.8';
        icVLevel2.style.display = 'flex';
        icVLevel3.style.visibility = icVLevel1.style.visibility = icVLevelMute.style.visibility = 'hidden';
        icVLevel3.style.display = icVLevel1.style.display = icVLevelMute.style.display = 'none';

    } else if (volume.value<50 && volume.value>0) {
        icVLevel1.style.visibility = 'visible';
        icVLevel1.style.opacity = '0.6';
        VolValue.style.opacity = '0.6';
        icVLevel1.style.display = 'flex';
        icVLevel2.style.visibility = icVLevel3.style.visibility = icVLevelMute.style.visibility = 'hidden';
        icVLevel2.style.display = icVLevel3.style.display = icVLevelMute.style.display = 'none';

    } else if (volume.value == 0) {
        icVLevelMute.style.visibility = 'visible';
        icVLevelMute.style.opacity = '0.4';
        VolValue.style.opacity = '0.4';
        icVLevelMute.style.display = 'flex';
        icVLevel1.style.visibility = icVLevel2.style.visibility = icVLevel3.style.visibility = 'hidden';
        icVLevel1.style.display = icVLevel2.style.display = icVLevel3.style.display = 'none';

    }

}

function onClickMute(){

    if (icVLevel3.style.visibility == 'visible' || icVLevel2.style.visibility == 'visible' || icVLevel1.style.visibility == 'visible') {
        previousCurrentVolume = volume.value;
        audio.volume = 0;
        volume.value = 0;
        VolValue.innerText = volume.value;
        check__iconVolume();
        color_fill_toddler_active();
    } else if (audio.volume == 0) { 
        volume.value = previousCurrentVolume;
        VolValue.innerText = previousCurrentVolume;
        audio.volume = previousCurrentVolume/100;
        check__iconVolume();
        color_fill_toddler_active();
    }
}

function event_onmousemove_volume(){
    getValueAtrib_volume.currentValue_volume = volume.value;
    VolValue.innerText = volume.value;
    audio.volume = getValueAtrib_volume.currentValue_volume/100;
    check__iconVolume();
}

onkeydown = function PressKey(key){
    if (key.code == 'ArrowLeft' || key.code == 'ArrowUp'){

        color_fill_toddler_active();
        curent_color_toddler_status = false;

        get_value_current_volume();
        audio.volume = volume.value/100;

    } else if(key.code == 'ArrowRight' || key.code == 'ArrowDown'){

        color_fill_toddler_active();
        curent_color_toddler_status = false;

        get_value_current_volume();
        audio.volume = volume.value/100;

    }
}

onkeyup = function PressKeyTest(key) {
    if (key.code == 'ArrowLeft' || key.code == 'ArrowUp' || key.code == 'ArrowRight' || key.code == 'ArrowDown'){
    curent_color_toddler_status = true;
    }
}

function event_onmouseup_volume(){
    VolValue.innerText = volume.value;
    check__iconVolume();
}

function color_fill_toddler_active(){
    let
    toddler_color_active = "linear-gradient(90deg, rgba(23,68,145,0.906)"+volume.value+"%, rgba(255,255,255,1)"+volume.value+"%, rgba(200,200,200,1) 100%)",
    toddler_color_no_active = "linear-gradient(90deg, rgba(37,89,179,0.586)"+volume.value+"%, rgba(255,255,255,1)"+volume.value+"%, rgba(200,200,200,1) 100%)";

    if (curent_color_toddler_status == false){
    volume.style.background = toddler_color_active;

    } else if (curent_color_toddler_status == true){
        volume.style.background = toddler_color_no_active;
    }
}

// Discription control audio player for event mouse
function get_value_current_volume(){

    get_value_atrib_volume();
    check__iconVolume();
    VolValue.innerText = volume.value;
    curent_color_toddler_status = false;

    volume.onpointermove = function get_value_current_volumeMove(){
        event_onmousemove_volume();
        color_fill_toddler_active();
    }

    volume.onpointerup = function get_value_current_volumeUp(){
        event_onmouseup_volume();
        curent_color_toddler_status = true;
    }

}

// Discription control audio player for sensor event
// function get_value_current_volume_sensor(){

//     get_value_atrib_volume();
//     check__iconVolume();
//     VolValue.innerText = volume.value;
//     curent_color_toddler_status = false;

//     volume.onpointermove = function get_value_current_volumeMove_sensor(){
//         event_onmousemove_volume();
//         color_fill_toddler_active();
//     }

//     volume.onpointerup = function get_value_current_volumeUp_sensor(){
//         event_onmouseup_volume();
//         curent_color_toddler_status = true;
//     }

// }

function control__audio_volume(){
    
    // get_value_current_volume_sensor();
    get_value_current_volume();

}