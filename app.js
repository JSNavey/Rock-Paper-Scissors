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

// Function that computer will generate choices randomly between 0-2 or rock/paper/scissors.
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

// userChoice passes rock/paper/sciossors from addEventListening as argument.
// Take computer choice from function above.
function game(userChoice) {
  const computerChoice = getComputerChoice();
  // console.log("I choose " + userChoice);
  // console.log("Computer chooses " + computerChoice);
  console.log(userChoice + computerChoice);
  switch (userChoice + computerChoice) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      console.log("You win!");
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      console.log("Loser!");
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      console.log("Well...it's a draw.");
      break;
  }
}

// Add click addEventListener to each rock paper sciossors DOM Element.
// Then wraping them in main function.
function main() {
  rock_div.addEventListener("click", function() {
    // console.log("Rock");
    game("rock")
  });
  
  paper_div.addEventListener("click", function() {
    // console.log("Paper");
    game("paper")
  });
  
  scissors_div.addEventListener("click", function() {
    // console.log("Scissors");
    game("scissors")
  });
}

main();