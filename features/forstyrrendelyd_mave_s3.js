"use strict";

const audio = document.getElementById('background-audio');
    const button = document.getElementById('toggle-btn');
    const icon = document.getElementById('btn-icon');
    // URLs for speaker icons - you can replace these with your own icons if desired
    const iconOn = 'https://cdn-icons-png.flaticon.com/512/727/727240.png'; // speaker on
    const iconMuted = 'https://cdn-icons-png.flaticon.com/512/727/727245.png'; // speaker muted with cross
    button.addEventListener('click', () => {
      if (!audio.paused && !audio.muted) {
        // If playing & unmuted, mute the audio
        audio.muted = true;
        icon.src = iconMuted;
        icon.alt = 'Speaker muted - click to restart audio';
        button.setAttribute('aria-pressed', 'true');
        button.setAttribute('aria-label', 'Restart audio from beginning');
      } else {
        // If muted (or paused), unmute and restart from beginning and play
        audio.muted = false;
        audio.currentTime = 0;
        audio.play();
        icon.src = iconOn;
        icon.alt = 'Speaker on - click to mute audio';
        button.setAttribute('aria-pressed', 'false');
        button.setAttribute('aria-label', 'Mute audio');
      }
    });

     // Handle autoplay rejection by some browsers
    audio.play().catch(() => {
        audio.muted = true;
        icon.src = iconMuted;
        icon.alt = 'Speaker muted - click to restart audio';
        button.setAttribute('aria-pressed', 'true');
        button.setAttribute('aria-label', 'Restart audio from beginning');
        });