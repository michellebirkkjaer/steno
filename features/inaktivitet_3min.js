"use strict";

let inactivityTimer;

// Funktion til at nulstille timeren
function resetInactivityTimer() {
    clearTimeout(inactivityTimer);
    inactivityTimer = setTimeout(() => {
        // Nulstil overlay-status
        sessionStorage.removeItem("overlaySeen");
        // Gå til forsiden (med overlay igen)
        window.location.href = "/index.html";
    }, 180000); // 3 minutter = 180.000 ms
}

// Start timer og tilføj event listeners
window.addEventListener("DOMContentLoaded", () => {
    resetInactivityTimer();
    ["click", "mousemove", "keydown", "touchstart"].forEach(event => {
        document.addEventListener(event, resetInactivityTimer);
    });
});
