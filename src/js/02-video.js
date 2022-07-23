import throttle from 'lodash.throttle';
import Player from '@vimeo/player';
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = "videoplayer-current-time";
const getTime = localStorage.getItem(LOCALSTORAGE_KEY);


player.on('timeupdate', throttle(onplay, 1000));
player.setCurrentTime(getTime);

function onplay(data) {
    const currentTime = data.seconds;
    localStorage.setItem(LOCALSTORAGE_KEY, currentTime);
    console.log("time", currentTime)
}