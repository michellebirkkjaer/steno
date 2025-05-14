"use strict";



const guessButton = document.querySelector('button img.gaet').parentElement;
const popup = document.getElementById('popup');
const submitGuess = document.getElementById('submitGuess');

const correctName = "Villads"; //

// Vis popup når "gæt her"-knappen klikkes
guessButton.addEventListener('click', () => {
  popup.classList.remove('hidden');
});

// Håndtér gæt
submitGuess.addEventListener('click', () => {
  const userGuess = document.getElementById('guessInput').value.trim().toLowerCase();
  if (userGuess === correctName.toLowerCase()) {
    window.location.href = 'maven_korrekt.html'; // 
  } else {
    window.location.href = 'maven_forkert.html'; // 
  }
});