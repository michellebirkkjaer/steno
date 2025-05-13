"use strict";

const overlay = document.getElementById('overlay');
// Remove overlay on click or keyboard "Enter"/"Space" key for accessibility
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
}
overlay.addEventListener('click', () => {
  removeOverlay();
});
overlay.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    removeOverlay();
  }
});

