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


// Klik-handler
button.addEventListener('click', () => {
  if (!audio.paused && !audio.muted) {
    audio.muted = true;
    icon.src = iconMuted.src;
    icon.alt = iconMuted.alt;
    button.setAttribute('aria-pressed', 'true');
    button.setAttribute('aria-label', 'Restart audio from beginning');
  } else {
    audio.muted = false;
    audio.currentTime = 0;
    audio.play();
    icon.src = iconOn.src;
    icon.alt = iconOn.alt;
    button.setAttribute('aria-pressed', 'false');
    button.setAttribute('aria-label', 'Mute audio');
  }
});

// Fallback hvis autoplay fejler
audio.play().catch(() => {
  audio.muted = true;
  icon.src = iconMuted.src;
  icon.alt = iconMuted.alt;
  button.setAttribute('aria-pressed', 'true');
  button.setAttribute('aria-label', 'Restart audio from beginning');
});
