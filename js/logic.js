const decreaseTime = document.querySelector('#time');
const increaseScore = document.querySelector('#score');

const todoInput1 = document.querySelector('#input1');
const todoInput2 = document.querySelector('#input2');
const todoInput3 = document.querySelector('#input3');
const submitBtn = document.querySelector('#submitBtn');

// Game data
let counter = 60;
let score = 0;

// Test words (3 letters each)
const wordsArray = ["cat", "dog", "sun", "cup"];


decreaseTime.innerText = counter;
increaseScore.innerText = score;

// Countdown timer
let gameInterval = setInterval(() => {
  if (counter > 0) {
    counter--;
    decreaseTime.innerText = counter;
  } else {
    clearInterval(gameInterval);
    alert("⏰ Time’s up! Your final score is: " + score);
  }
}, 10);


[todoInput1, todoInput2, todoInput3].forEach(input => {
  input.addEventListener("input", () => {
    input.value = input.value.slice(0, 1).toLowerCase(); 
  });
});

// Function to check guesses
function checkGuess() {
  const guess = (todoInput1.value + todoInput2.value + todoInput3.value).toLowerCase();

  if (wordsArray.includes(guess)) {
    score++;
    increaseScore.innerText = score;
    alert("✅ Correct! Your score: " + score);
  } else {
    alert("❌ Wrong guess! Try again.");
  }

  // Clear inputs after checking
  todoInput1.value = "";
  todoInput2.value = "";
  todoInput3.value = "";
  todoInput1.focus();
}

// Handle submit button click
submitBtn.addEventListener('click', checkGuess);
