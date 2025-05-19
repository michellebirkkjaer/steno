"use strict";

let inaktivitetsTimer;

// Funktion til at nulstille timeren
function nulstilInaktivitetsTimer() {
    clearTimeout(inaktivitetsTimer);
    inaktivitetsTimer = setTimeout(() => {
        // Nulstil overlay-status
        sessionStorage.removeItem("overlaySeen");
        // Gå til forsiden (med overlay igen)
        window.location.href = "/index.html";
    }, 180000); // 3 minutter = 180.000 ms
}

// Start timer og tilføj event listeners
window.addEventListener("DOMContentLoaded", () => {
    nulstilInaktivitetsTimer();
    ["click", "mousemove", "keydown", "touchstart"].forEach(event => {
        document.addEventListener(event, nulstilInaktivitetsTimer);
    });
});


