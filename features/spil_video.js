"use strict";


  document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.getElementById("overlay");
    const playButton = document.getElementById("afspil_ikon");
    const video = document.getElementById("info_video");

    // Sørg for at overlay vises, når siden loader
    overlay.style.display = "flex"; // Eller "block", afhængigt af dit CSS-design

    // Når brugeren klikker på play-knappen
    playButton.addEventListener("click", function () {
      overlay.style.display = "none";      // Fjern overlay
      video.muted = false;                 // Fjern mute
      video.play();                        // Start afspilning
    });
  });
