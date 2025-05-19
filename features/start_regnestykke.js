"use strict";

const overlay = document.getElementById('overlay');
const audioElement = document.getElementById('background-audio');

overlay.addEventListener('click', () => {
  overlay.style.display = 'none';
  audioElement.muted = false;
  audioElement.currentTime = 0;
  audioElement.play();
});
