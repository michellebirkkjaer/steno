"use strict";

const audio = document.getElementById('background-audio'); //Henter <audio>-elementet fra DOM'en og gemmer det i variablen audio.
const button = document.getElementById('toggle-btn');//Henter knappen som bruges til at slå lyd til/fra.
const icon = document.getElementById('btn-icon'); //Henter billede/ikonet inden i knappen, som skifter mellem "lyd til" og "mute".

const iconOn = new Image();
iconOn.src = "/img/generelt/horetelefoner.webp";
iconOn.alt = "Høretelefoner";
//Opretter et billedeobjekt til "lyd til", sætter kilde og alternativ tekst.

const iconMuted = new Image();
iconMuted.src = "/img/generelt/mute_horetelefoner.webp";
iconMuted.alt = "Mute høretelefoner";
iconMuted.classList.add("horetelefoner");
//Opretter et billedeobjekt til "lyd fra", sætter kilde, alternativ tekst og tilføjer en CSS-klasse for styling.

// Når siden er indlæst, prøv at starte lyden muted
window.addEventListener("DOMContentLoaded", () => { // Når hele HTML'en er indlæst:
  audio.play().catch(() => { //Prøver at afspille lyden (den starter i muted-tilstand som standard).
    console.warn("Autoplay mislykkedes – kræver brugerinteraktion."); //Hvis browseren blokerer autoplay (fordi der ikke har været brugerinteraktion), logges en advarsel i konsollen.
  });
});


// Klik-handler
button.addEventListener('click', () => { //Lytter efter klik på knappen
  if (!audio.paused && !audio.muted) { //Hvis lyden afspilles og ikke er muted...
    audio.muted = true; //... så slås lyden fra.
    icon.src = iconMuted.src; //Skift ikonet til "mute"-versionen.
    icon.alt = iconMuted.alt;
    button.setAttribute('aria-pressed', 'true'); //aria-pressed angiver at knappen nu er "aktiv" (mute-tilstand). aria-label forklarer skærmlæsere, hvad der sker næste gang man trykker.
    button.setAttribute('aria-label', 'Start lyd fra begyndelsen');
  } else { //Ellers (hvis lyd er paused eller muted)...
    audio.muted = false; // Slå lyden til.
    audio.currentTime = 0; //Spol lyden tilbage til start.
    audio.play(); //Afspil lyden.
    icon.src = iconOn.src; //Skift ikonet til "lyd til" versionen.
    icon.alt = iconOn.alt;
    button.setAttribute('aria-pressed', 'false'); //Opdater ARIA-attributter igen: aria-pressed = false betyder "ikke aktiv". aria-label forklarer at næste klik vil mute lyden.
    button.setAttribute('aria-label', 'Slå lyden fra');
  }
});
