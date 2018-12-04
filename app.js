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

// userChoice passes rock/paper/sciossors from addEventListening as argument
function game(userChoice) {
  console.log("I choose " + userChoice);
}

// Add click addEventListener to each rock paper sciossors DOM Element
// Then wraping them in main function
function main() {
  rock_div.addEventListener('click', function() {
    // console.log("Rock");
    game("rock!")
  });
  
  paper_div.addEventListener('click', function() {
    // console.log("Paper");
    game("paper!")
  });
  
  scissors_div.addEventListener('click', function() {
    // console.log("Scissors");
    game("scissors!")
  });
}

main();