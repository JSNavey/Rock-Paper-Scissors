const userScore = 0;
const computerScore = 0;

// Store DOM Elements as variables (cache DOM Elements)
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

// Add action to each rock paper sciossors DOM Element
rock_div.addEventListener('click', function() {
  console.log("Rock");
});

paper_div.addEventListener('click', function() {
  console.log("Paper");
});

scissors_div.addEventListener('click', function() {
  console.log("Scissors");
});