"use strict";

const overlay = document.getElementById('overlay');

if (!sessionStorage.getItem('overlaySeen')) {
  overlay.classList.remove('hidden');
} else {
  overlay.remove(); // Hvis set, fjern det helt
}

// Funktion: Fjern overlay med animation
function removeOverlay() {
    if (!overlay) return;
    overlay.style.transition = 'opacity 0.6s ease';
    overlay.style.opacity = 0;
    overlay.style.pointerEvents = 'none';
    setTimeout(() => {
        if (overlay && overlay.parentNode) {
            overlay.parentNode.removeChild(overlay);
        }
    }, 600);
    // Marker i sessionStorage at overlay er fjernet
    sessionStorage.setItem("overlaySeen", "true");
}

// Vis eller skjul overlay ved load afhængig af sessionStorage
window.addEventListener("DOMContentLoaded", () => {
    const seenOverlay = sessionStorage.getItem("overlaySeen");
    if (seenOverlay) {
        removeOverlay(); // skjul overlay med det samme
    }
});

// Klik/tast for at fjerne overlay
overlay?.addEventListener('click', removeOverlay);
overlay?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        removeOverlay();
    }
});
