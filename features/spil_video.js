"use strict";

const overlay = document.getElementById('overlay');
const video = document.getElementById('myVideo');

overlay.addEventListener('click', () => {
  overlay.style.display = 'none';
  video.muted = false;
  video.currentTime = 0;
  video.play();
});
