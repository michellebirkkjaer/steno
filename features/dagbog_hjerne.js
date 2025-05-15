"use strict";

const audio = document.getElementById('background-audio');
const button = document.getElementById('toggle-btn');
const icon = document.getElementById('btn-icon');

const iconOn = new Image();
iconOn.src = "/img/generelt/horetelefoner.webp";
iconOn.alt = "Høretelefoner";

const iconMuted = new Image();
iconMuted.src = "/img/generelt/mute_horetelefoner.webp";
iconMuted.alt = "Mute høretelefoner";
iconMuted.classList.add("horetelefoner");

// Når siden er indlæst, prøv at starte lyden muted
window.addEventListener("DOMContentLoaded", () => {
  audio.play().catch(() => {
    console.warn("Autoplay mislykkedes – kræver brugerinteraktion.");
  });
});

// Klik-handler
button.addEventListener('click', () => {
  if (!audio.paused && !audio.muted) {
    // Mute lyd
    audio.muted = true;
    icon.src = iconMuted.src;
    icon.alt = iconMuted.alt;
    button.setAttribute('aria-pressed', 'true');
    button.setAttribute('aria-label', 'Start lyd fra begyndelsen');
  } else {
    // Spil lyd med lyd
    audio.muted = false;
    audio.currentTime = 0;
    audio.play();
    icon.src = iconOn.src;
    icon.alt = iconOn.alt;
    button.setAttribute('aria-pressed', 'false');
    button.setAttribute('aria-label', 'Slå lyden fra');
  }
});
