"use strict";

const overlay = document.getElementById('overlay');
const video = document.getElementById('myVideo'); //Henter <video>-elementet med id myVideo og gemmer det i variablen video.

overlay.addEventListener('click', () => { //Sætter en klik-handler på overlayet
  overlay.style.display = 'none'; //Skjuler overlayet ved at sætte display: none;
  video.muted = false; //Slår lyden til på videoen (hvis den tidligere var muted – fx pga. autoplay-begrænsninger).
  video.currentTime = 0; //Spoler videoen tilbage til start (0 sekunder).
  video.play(); //Starter videoafspilningen.
});
