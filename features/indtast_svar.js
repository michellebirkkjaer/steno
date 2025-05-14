"use strict";

// Vent med at køre JavaScript, indtil hele HTML'en er indlæst
document.addEventListener("DOMContentLoaded", () => {
    
  // Find knappen, som brugeren klikker på for at vise overlayet
    const indtastKnap = document.getElementById("indtast_knap");
  
    // Find selve overlay-sektionen med billedet
    const overlayBillede = document.getElementById("overlay_billede");
 
    // Finder luk-knappen
 const lukKnap = document.getElementById("luk_knap");

    const okKnap = document.getElementById("ok_knap");
    const svarInput = document.getElementById("svar_input");
    const forkertOverlay = document.getElementById("forkert_overlay");
  
    // Når brugeren klikker på knappen, fjernes 'hidden'-attributten
    // Så vises overlayet på siden
    indtastKnap.addEventListener("click", () => {
      overlayBillede.removeAttribute("hidden");
    });
 
// Skjul overlay når man klikker på luk-knappen
lukKnap.addEventListener("click", () => {
    overlayBillede.setAttribute("hidden", true);
  });

// Tjek svaret
okKnap.addEventListener("click", () => {
const brugerSvar = svarInput.value.trim();
const korrektSvar = "122";

if (brugerSvar === korrektSvar) {
    // Hvis korrekt, send brugeren videre til ny side
    window.location.href = "rigtigt_svar.html";
} else {
    // Hvis forkert, vis forkert-overlay
    forkertOverlay.removeAttribute("hidden");
}
});

// "Prøv igen" lukker forkert-overlay
provIgenKnap.addEventListener("click", () => {
forkertOverlay.setAttribute("hidden", true);
svarInput.value = "";
});
});
  