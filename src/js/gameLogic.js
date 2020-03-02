const game = () => {
  // logbook index #1
  // logbook index #2
  let pScore = 0;
  let cScore = 0;

  const startGame = () => {
    // logbook index #3
    const playBtn = document.querySelector(".startOptions button");
    const startScreen = document.querySelector(".startPage");
    const gameScreen = document.querySelector(".gamePage");
    const gameOptions = document.querySelector(".gameOptions");

    playBtn.addEventListener("click", () => {
      // logbook index #4
      playBtn.classList.add("fadeOut");
      startScreen.classList.add("fadeOut");
      gameScreen.classList.add("fadeIn");
      gameOptions.classList.add("fadeIn");
    });
  };

  const playGame = () => {
    // logbook index #5
    const gameOptions = document.querySelectorAll(".gameOptions button"); // logbook index #6
    const playerHand = document.querySelector(".playerHand"); // logbook index #7
    const computerHand = document.querySelector(".computerHand");

    const computerOptions = ["rock", "paper", "scissors"]; // logbook index #8

    gameOptions.forEach(option => {
      option.addEventListener("click", function() {
        // logbook index #9
        const computerNumber = Math.floor(Math.random() * 3); // logbook index #10
        const computerChoice = computerOptions[computerNumber]; // logbook index #11

        compareHands(this.textContent, computerChoice); // logbook index #12

        playerHand.src = `./img/${this.textContent}.png`; // logbook index #13
        computerHand.src = `./img/${computerChoice}.png`;
      });
    });
  };

  //time to update the scoreboard
  const UpdateScore = () => {
    const playerScore = document.querySelector(".playerScore p");
    const computerScore = document.querySelector(".computerScore p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  const compareHands = (playerChoice, computerChoice) => {
    // logbook index #14
    const winner = document.querySelector(".winner"); // logbook index #15

    if (playerChoice === computerChoice) {
      // logbook index #16
      winner.textContent = "It is a tie";
      return;
    }

    if (playerChoice === "rock") {
      // logbook index #17
      if (computerChoice === "scissors") {
        winner.textContent = "player wins";
        pScore++;
        UpdateScore();
        return;
      } else {
        winner.textContent = "Computer wins";
        cScore++;
        UpdateScore();
        return;
      }
    }

    if (playerChoice === "paper") {
      // logbook index #18
      if (computerChoice === "scissors") {
        winner.textContent = "computer wins";
        cScore++;
        UpdateScore();
        return;
      } else {
        winner.textContent = "Player wins";
        pScore++;
        UpdateScore();
        return;
      }
    }

    if (playerChoice === "scissors") {
      // logbook index #19
      if (computerChoice === "rock") {
        winner.textContent = "computer wins";
        cScore++;
        UpdateScore();
        return;
      } else {
        winner.textContent = "Player wins";
        pScore++;
        UpdateScore();
        return;
      }
    }
  };

  startGame(); // logbook index #20
  playGame();
};

game(); // logbook index #21
