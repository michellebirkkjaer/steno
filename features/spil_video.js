"use strict";


  document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.getElementById("overlay");
    const playButton = document.getElementById("afspil_ikon");
    const audio = document.getElementById("background-audio");

    // Sørg for at overlay vises, når siden loader
    overlay.style.display = "flex"; // Eller "block", afhængigt af dit CSS-design

    // Når brugeren klikker på play-knappen
    playButton.addEventListener("click", function () {
      overlay.style.display = "none";      // Fjern overlay
      audio.muted = false;                 // Fjern mute
      audio.play();                        // Start afspilning
    });
  });
