"use strict";

// Venter på at hele HTML'en er indlæst, før koden kører
document.addEventListener("DOMContentLoaded", () => {

  // Starter nedtællingen ved 10
  let count = 10;

  // Finder HTML-elementet med id'et 'countdown'
  const countdownEl = document.getElementById('countdown');

  // Starter et interval, som kører hvert 1000 millisekunder (1 sekund)
  const timer = setInterval(() => {
    count--; // Trækker 1 fra tælleren
    countdownEl.textContent = count; // Opdaterer tallet på skærmen

    // Når tælleren når 0
    if (count === 0) {
      clearInterval(timer); // Stopper intervallet
      window.location.href = "haender_find_tingene.html"; // Sender brugeren videre til næste side
    }
  }, 1000); // Koden inden i setInterval kører hver 1000 ms = 1 sekund
});