let choice = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return choice[Math.floor(Math.random() * 3) + 1];
}

function Game(playerChoice, computerChoice) {
  let player = playerChoice.toLowerCase();
  let computer = computerChoice.toLowerCase();
}
