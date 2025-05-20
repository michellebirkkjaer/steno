"use strict";

const lyd = document.getElementById("klik_lyd");

document.querySelectorAll(".pil_knap").forEach(link => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Stop linket i at skifte side med det samme
    const destination = link.getAttribute("href"); // Gem linkets destination

    lyd.currentTime = 0;
    lyd.play();

    // Vent lidt, før vi skifter side (f.eks. 900 ms)
    setTimeout(() => {
      window.location.href = destination;
    }, 800); // Tilpas tiden efter hvor lang lyden er
  });
});
