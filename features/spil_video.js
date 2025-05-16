"use strict";

const overlay = document.getElementById('overlay');
const video = document.getElementById('info_video');

overlay.addEventListener('click', () => {
  overlay.style.display = 'none';
  video.muted = false;
  video.currentTime = 0;
  video.play();
});
