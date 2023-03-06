let choice = ["rock", "paper", "scissor"];
let score = 0;

function getComputerChoice() {
  return choice[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Tie";
    //
  } else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      return "Computer wins";
    } else {
      return "Player wins";
    }
    //
  } else if (playerSelection === "paper") {
    if (computerSelection === "scissor") {
      return "Computer wins";
    } else {
      return "Player wins";
    }
    //
  } else if (playerSelection === "scissor") {
    if (computerSelection === "rock") {
      return "Computer wins";
    } else {
      return "Player wins";
    }
  }
}

function getHandPic(handSelected, div) {
  const img = document.createElement("img");

  if (handSelected === "rock") {
    img.src = "assets/rock.png";
  } else if (handSelected === "paper") {
    img.src = "assets/paper.png";
  } else {
    img.src = "assets/scissor.png";
  }

  let src = document.querySelector(div);

  if (src.hasChildNodes()) {
    src.removeChild(src.children[0]);
  }

  src.appendChild(img);
}

function Game() {
  //adds event listener for the rock paper scissor choices
  const rps = document.querySelectorAll(".rps");
  let score = 0;

  rps.forEach((rps) => {
    rps.addEventListener("click", playerSelect);
  });

  //
  function playerSelect(e) {
    const computerSelection = getComputerChoice();
    const playerSelection = this.id.toString();
    getHandPic(computerSelection, ".computer");
    getHandPic(playerSelection, ".player");

    const winner = playRound(playerSelection, computerSelection);

    const win = document.querySelector(".winner");
    win.innerHTML = winner;
  }
}

Game();
