let userScore = 0;
let computerScore = 0;

// Store DOM Elements as variables (cache DOM Elements)
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

// Function that computer will generate choices randomly between 0-2 or rock/paper/scissors.
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

// To capitalize the first letter
// Must apply slice(1), otherwise it shows only the first letter
function capitalizeFirstLetter (choice) {
  return choice.charAt(0).toUpperCase() + choice.slice(1);
}

function win(userPick, computerPick) {
  userScore++;
  // Then change scores on the score board
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${capitalizeFirstLetter(userPick)} beats ${capitalizeFirstLetter(computerPick)}. You Win!`;
  // Add class to JS by using DOM method
  document.getElementById(userPick).classList.add('winning-glow');
}

function lose(userPick, computerPick) {
  computerScore++;
  // Then change scores on the score board
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${capitalizeFirstLetter(userPick)} loses to ${capitalizeFirstLetter(computerPick)}. Sorry...`;
  document.getElementById(userPick).classList.add('losing-glow');
}

function draw(userPick, computerPick) {
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${capitalizeFirstLetter(userPick)} to ${capitalizeFirstLetter(computerPick)}. Well...Try again then.`;
  document.getElementById(userPick).classList.add('draw-glow');
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
      // console.log("You win!");
      win(userChoice, computerChoice);
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock": 
      // console.log("Loser!");
      lose(userChoice, computerChoice);
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      // console.log("Well...it's a draw.");
      draw(userChoice, computerChoice);
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