let choice = ["rock", "paper", "scissor"];
let playerScore = 0;
let computerScore = 0;

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

  if (div === ".player") {
    img.classList.add("chosen-hand-player");
  } else {
    img.classList.add("chosen-hand-computer");
  }

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

function tallyScore(winner) {
  if (winner === "Computer wins") {
    computerScore++;
  } else if (winner === "Player wins") {
    playerScore++;
  }
}

function Game() {
  //adds event listener for the rock paper scissor choices
  const rps = document.querySelectorAll(".rps");

  rps.forEach((rps) => {
    rps.addEventListener("click", playerSelect);
  });

  rps.forEach((rps) => {
    rps.addEventListener("transitionend", normalButton);
  });

  // removes transform when transition ends
  function normalButton(e) {
    if (e.propertyName === "transform") {
      this.classList.remove("clicked");
    }
  }

  //
  function playerSelect(e) {
    this.classList.add("clicked");

    const computerSelection = getComputerChoice();
    const playerSelection = this.id.toString();
    getHandPic(computerSelection, ".computer");
    getHandPic(playerSelection, ".player");

    const winner = playRound(playerSelection, computerSelection);
    tallyScore(winner);

    const win = document.querySelector(".winner");
    win.innerHTML = winner;

    const displayPlayerScore = document.querySelector(".player-score");
    displayPlayerScore.innerHTML = `Player: ${playerScore}`;

    const displayComputerScore = document.querySelector(".computer-score");
    displayComputerScore.innerHTML = `Computer: ${computerScore}`;

    if (playerScore === 4) {
      console.log("lol");
    } else if (computerScore === 4) {
      console.log("LOLOL");
    }
  }
}

Game();
