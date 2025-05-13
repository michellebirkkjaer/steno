"use strict";

const overlay = document.getElementById('overlay');
//Henter HTML-elementet med id "overlay" (det slørede lag over baggrunden).
//Gemmer det som en konstant variabel overlay, så det kan bruges flere steder i koden.


// Fjern overlay ved klik eller tastatur (Enter eller mellemrum)
function removeOverlay() {
//Definerer en funktion der fjerner overlayet fra siden.
//Funktionen bruges både ved klik og ved tastetryk (for brugere der bruger tastatur).
  if (!overlay) return;
  //Sikkerhedstjek: Hvis overlay ikke findes i DOM'en, gør funktionen ingenting (undgår fejl).
  overlay.style.transition = 'opacity 0.6s ease';
  //Gør overgangen (fade-out) glidende: ændringer i opacity sker over 0,6 sekunder med en blød animation.
  overlay.style.opacity = 0;
  //Sætter overlayets gennemsigtighed til 0 – det bliver usynligt (fader ud).
  overlay.style.pointerEvents = 'none';
  //Deaktiverer mus-interaktion med overlayet (gør det "gennemsigtigt" for klik).
  //Brugeren kan herefter trykke bagvedliggende knapper/billeder.
  setTimeout(() => {
  //Starter en forsinkelse på 600 millisekunder (samme tid som fade-out animation).
  //Efter denne tid slettes overlayet helt fra DOM’en.
    if (overlay && overlay.parentNode) {
      overlay.parentNode.removeChild(overlay);
    } //Sikkerhedstjek igen: Hvis overlay stadig findes, fjernes det fra DOM’en, dvs. helt slettet fra siden og frigiver dermed hukommelse.
  }, 600);
}
overlay.addEventListener('click', () => {
  removeOverlay();
}); //Lytter efter klik på overlayet. Når brugeren klikker på overlayet med musen, fjernes det med removeOverlay().


overlay.addEventListener('keydown', (e) => { //Lytter efter tastetryk, mens overlayet har fokus.
  if (e.key === 'Enter' || e.key === ' ') { //Hvis brugeren trykker på Enter eller mellemrum, aktiveres overlayet som en knap.
    e.preventDefault(); //Forhindrer standard browser-opførsel (så f.eks. siden ikke scroller ved mellemrum).
    removeOverlay(); //Kalder removeOverlay() ved tastetryk – samme funktionalitet som ved klik.
  }
});

