let choice = ["rock", "paper", "scissor"];

function getComputerChoice() {
  return choice[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "tie";
    //
  } else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      return "computer wins";
    } else {
      return "human wins";
    }
    //
  } else if (playerSelection === "paper") {
    if (computerSelection === "scissor") {
      return "computer wins";
    } else {
      return "player wins";
    }
    //
  } else if (playerSelection === "scissor") {
    if (computerSelection === "rock") {
      return "computer wins";
    } else {
      return "player wins";
    }
  }
}

function Game() {
  const playerSelection = prompt("Choose what hand you'll pick");
  const computerSelection = getComputerChoice();

  console.log(playRound(playerSelection, computerSelection));
}

for (let x = 0; x < 5; x++) {
  Game();
}
