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

function getHandPic(handSelected, element) {
  const img = document.createElement("img");

  if (element === ".player") {
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

  let src = document.querySelector(element);

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

function restartGame() {
  const modal = document.querySelector(".modal");
  const player = document.querySelector(".player-score");
  const computer = document.querySelector(".computer-score");
  const playerDisplay = document.querySelector(".player");
  const computerDisplay = document.querySelector(".computer");
  const msg = document.querySelector(".winner");
  const overlay = document.querySelector(".overlay");

  modal.classList.remove("show");
  overlay.classList.remove("active");
  playerScore = 0;
  computerScore = 0;
  player.innerHTML = "Player: 0";
  computer.innerHTML = "Computer: 0";
  msg.innerHTML = "Choose your hand";

  if (playerDisplay.hasChildNodes()) {
    playerDisplay.removeChild(playerDisplay.children[0]);
  }
  if (computerDisplay.hasChildNodes()) {
    computerDisplay.removeChild(computerDisplay.children[0]);
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
    console.log(e.propertyName);
    if (e.propertyName === "transform") {
      this.classList.remove("clicked");
    }
  }

  //
  function playerSelect(e) {
    // adds clicked class to the choices to animate clicking
    this.classList.add("clicked");

    //gets the chosen hand of both and animates them on the bottom div
    const computerSelection = getComputerChoice();
    const playerSelection = this.id.toString();
    getHandPic(computerSelection, ".computer");
    getHandPic(playerSelection, ".player");

    // plays a round
    const winner = playRound(playerSelection, computerSelection);
    tallyScore(winner);

    // displays the winner of the current round
    const win = document.querySelector(".winner");
    win.innerHTML = winner;

    const displayPlayerScore = document.querySelector(".player-score");
    displayPlayerScore.innerHTML = `Player: ${playerScore}`;

    const displayComputerScore = document.querySelector(".computer-score");
    displayComputerScore.innerHTML = `Computer: ${computerScore}`;

    // game loop end and restart
    if (playerScore === 4 || computerScore === 4) {
      const modal = document.querySelector(".modal");
      const restartBtn = document.querySelector(".restart-btn");
      const modalMsg = document.querySelector(".modal-msg");
      const overlay = document.querySelector(".overlay");

      modal.classList.add("show");
      overlay.classList.add("active");
      modalMsg.innerHTML = playerScore === 4 ? "You won!" : "You lost.";
      restartBtn.onclick = restartGame;
      console.log("lol");
    }
  }
}

Game();
