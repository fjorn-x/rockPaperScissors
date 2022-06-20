function computerPlay() {
  let random = Math.floor(Math.random() * 3) + 1;

  if (random === 1) {
    return "Rock";
  } else if (random === 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function playRound(playerSelection, computerSelection = computerPlay()) {
  let playerOption =
    playerSelection.charAt(0).toUpperCase() +
    String(playerSelection).slice(1).toLowerCase();

  if (playerOption === computerSelection) {
    return `It's a tie since both players selected ${playerOption}`;
  }
  if (
    (playerOption === "Rock" && computerSelection === "Scissors") ||
    (playerOption === "Scissors" && computerSelection === "Paper") ||
    (playerOption === "Paper" && computerSelection === "Rock")
  ) {
    return `You Win ! ${playerOption} beats ${computerSelection}`;
  } else {
    return `You Lose ! ${computerSelection} beats ${playerOption}`;
  }
}

function game() {
  for (i = 0; i < 5; i++) {
    let result = playRound(prompt("Select Rock, Paper or Scissors"));
    console.log(result);
  }
}

game();
