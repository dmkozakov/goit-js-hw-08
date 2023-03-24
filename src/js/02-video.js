import VimeoPlayer from "@vimeo/player";
var throttle = require("lodash.throttle");

const refs = {
  iframe: document.querySelector("iframe"),
};

const player = new VimeoPlayer(refs.iframe);
const savedTime = localStorage.getItem("videoplayer-current-time");
setTime(savedTime);

player.on("timeupdate", throttle(saveCurrentTime, 1000));

function saveCurrentTime(data) {
  localStorage.setItem("videoplayer-current-time", data.seconds);
}

function setTime(savedTime) {
  if (savedTime) {
    player.setCurrentTime(savedTime);
  }
}
