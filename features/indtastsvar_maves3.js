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
okKnap.addEventListener("click", (event) => {
  event.preventDefault(); // Stopper siden fra at reloade

  const brugerSvar = svarInput.value.trim();
  const korrektSvar = "74";

  if (brugerSvar === korrektSvar) {
    window.location.href = "hjernen_4.html";
  } else {
    forkertOverlay.removeAttribute("hidden");
  }
});

// Det her er prøv igen knappen som sendes til den pågældene side
const provIgenKnap = document.getElementById("prov_igen_knap");

provIgenKnap.addEventListener("click", () => {
  location.reload(); // Genindlæs siden fra starten
});
});

// Når hele HTML-dokumentet er indlæst (DOMContentLoaded), tilføjes der klik-events til to knapper:
// Når brugeren klikker på knappen med id "afslut_knappen", sendes de tilbage til forsiden (index.html).
// Når brugeren klikker på knappen med id "start_igen_knap", starter de forfra på siden "hjernen_1.html".
window.addEventListener("DOMContentLoaded", function () {
  document.getElementById("afslut_knappen").addEventListener("click", function () {
    window.location.href = "index.html";
  });

  document.getElementById("start_igen_knap").addEventListener("click", function () {
    window.location.href = "hjernen_1.html";
  });
});
