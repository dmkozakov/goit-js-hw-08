import VimeoPlayer from "@vimeo/player";
var throttle = require("lodash.throttle");

const STORAGE_KEY = "videoplayer-current-time";

const refs = {
  iframe: document.querySelector("iframe"),
};

const player = new VimeoPlayer(refs.iframe);
const savedTime = localStorage.getItem(STORAGE_KEY);
setTime(savedTime);

player.on("timeupdate", throttle(saveCurrentTime, 1000));

function saveCurrentTime(data) {
  localStorage.setItem(STORAGE_KEY, data.seconds);
}

function setTime(savedTime) {
  if (savedTime) {
    player.setCurrentTime(savedTime);
  }
}
