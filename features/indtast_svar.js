"use strict";

// Vent med at køre JavaScript, indtil hele HTML'en er indlæst
document.addEventListener("DOMContentLoaded", () => {
    
  // Find knappen, som brugeren klikker på for at vise overlayet
    const indtastKnap = document.getElementById("indtast_knap");

  // Find selve overlay-sektionen med billedet
    const overlayBillede = document.getElementById("overlay_billede");
  
    // Når brugeren klikker på knappen, fjernes 'hidden'-attributten
    // Så vises overlayet på siden
    indtastKnap.addEventListener("click", () => {
      overlayBillede.removeAttribute("hidden");
    });
  });