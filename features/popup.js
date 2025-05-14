"use strict";



// Vent med at køre JavaScript, indtil hele HTML'en er indlæst
document.addEventListener("DOMContentLoaded", () => {
    
    // Find knappen, som brugeren klikker på for at vise overlayet
      const indtastKnap = document.getElementById("submitGuess");
    
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
  okKnap.addEventListener("click", (event) => {
    event.preventDefault(); // <-- Dette stopper formen i at genindlæse siden
  
    const brugerSvar = svarInput.value.trim();
    //sikrer at brugeren får korrekt svar, selv hvis der er stavefejl i "Villads"
    const korrektSvar = ["Villads", "villads", "vilads", "Vilads", "villas", "Villas"];
  
    if (brugerSvar === korrektSvar) {
        window.location.href = "maven_korrekt.html";
    } else {
        window.location.href = 'maven_forkert.html';
    }
  });

  });