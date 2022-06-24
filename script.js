let playerCounter = 0;
let computerCounter = 0;
let tieCounter = 0;
const playerResult = document.querySelector(".playerScore");
const computerResult = document.querySelector(".computerScore");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");
const playerChoice = document.querySelector(".player-choice");
const computerChoice = document.querySelector(".computer-choice");
const computerSide = document.querySelector(".computer-side");
const playerSide = document.querySelector(".player-side");

function randomChoice() {
  let random = Math.floor(Math.random() * 3) + 1;

  if (random === 1) {
    return "ROCK";
  } else if (random === 2) {
    return "PAPER";
  } else {
    return "SCISSOR";
  }
}

//game
function playRound(playerSelection, computerSelection) {
  playerChoice.textContent = playerSelection;
  computerChoice.textContent = computerSelection;
  if (playerSelection === computerSelection) {
    //tie
    tieCounter++;
  } else if (
    (playerSelection === "ROCK" && computerSelection === "SCISSOR") ||
    (playerSelection === "SCISSOR" && computerSelection === "PAPER") ||
    (playerSelection === "PAPER" && computerSelection === "ROCK")
  ) {
    //here player wins
    playerCounter++;
  } else {
    //here computer wins
    computerCounter++;
  }
  playerResult.textContent = playerCounter;
  computerResult.textContent = computerCounter;
  if (playerCounter === 5) {
    playerResult.textContent = "Wins";

    playerCounter = 0;
    computerCounter = 0;
  } else if (computerCounter === 5) {
    computerResult.textContent = "Wins";
    computerCounter = 0;
    playerCounter = 0;
  }
}

//recieves input from buttons
rock.addEventListener("click", () => {
  let computerSelection = randomChoice();
  playRound(rock.value, computerSelection);
});
paper.addEventListener("click", () => {
  let computerSelection = randomChoice();
  playRound(paper.value, computerSelection);
});
scissor.addEventListener("click", () => {
  let computerSelection = randomChoice();
  playRound(scissor.value, computerSelection);
});
