"use strict";

const btn = document.getElementById('playBtn');
const video = document.getElementById('myVideo');

btn.addEventListener('click', () => {
  video.style.display = 'block';
  video.play();
  btn.style.display = 'none';
});