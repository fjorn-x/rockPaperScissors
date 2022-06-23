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
  if (playerSelection === null) {
    playerSelection = "Rock";
  }
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
    let playerOption = prompt("Select Rock, Paper or Scissors");
    let result = playRound(playerOption);
    console.log(result);
  }
}

game();
