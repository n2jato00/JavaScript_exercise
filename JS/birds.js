// Array of bird names
const birdNames = ["sparrow", "hawk", "eagle", "parrot", "flamingo", "penguin", "robin", "dove", "pelican", "owl"];

// Get DOM elements
const wordContainer = document.getElementById("word-container");
const letterInput = document.getElementById("letter-input");
const submitBtn = document.getElementById("submit-btn");

let currentWord = "";
let currentLetterIndex = 0;
let currentLetterIsFirst = true;

// Initialize game
function init() {
  // Get random word from birdNames array
  currentWord = birdNames[Math.floor(Math.random() * birdNames.length)];
  
  // Display current word on screen
  wordContainer.textContent = currentWord;
}

// Event listener for submit button
submitBtn.addEventListener("click", function() {
  // Get letter input value
  const letter = letterInput.value.toLowerCase();
  
  // Check if letter is valid
  if (letter.length !== 1 || letter !== currentWord[currentLetterIndex]) {
    alert("Invalid input. Please enter a valid letter.");
    letterInput.value = "";
    return;
  }
  
  // Remove all occurrences of letter from current word
  currentWord = currentWord.replace(new RegExp(letter, "gi"), "");
  
  // Check if current letter is first or last
  if (currentLetterIsFirst) {
    currentLetterIndex = currentWord.length - 1;
    currentLetterIsFirst = false;
  } else {
    currentLetterIndex = 0;
    currentLetterIsFirst = true;
  }
  
  // Check if word has been fully cleared
  if (currentWord.length === 0) {
    // Get new random word from birdNames array
    currentWord = birdNames[Math.floor(Math.random() * birdNames.length)];
    
    // Reset current letter index and first/last flag
    currentLetterIndex = 0;
    currentLetterIsFirst = true;
    
    // Display new word on screen
    wordContainer.textContent = currentWord;
  } else {
    // Display updated word on screen
    wordContainer.textContent = currentWord;
  }
  
  // Clear letter input field
  letterInput.value = "";
  
  // Focus on letter input field
  letterInput.focus();
});

// Initialize game
init();
