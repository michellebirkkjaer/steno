"use strict";



const guessBtn = document.getElementById('guessBtn');
const popup = document.getElementById('popup');
const submitGuess = document.getElementById('submitGuess');

const correctName = "villads"; // 

// Vis popup når man klikker på "Gæt her"
guessBtn.addEventListener('click', () => {
  popup.classList.remove('hidden');
});

// Når man klikker "Bekræft", tjek gæt
submitGuess.addEventListener('click', () => {
  const userGuess = document.getElementById('guessInput').value.trim().toLowerCase();

  if (userGuess === correctName.toLowerCase()) {
    window.location.href = 'maven_korrekt.html';
  } else {
    window.location.href = 'maven_forkert.html';
  }
});