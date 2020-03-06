const game = () => {
  let pScore = 0;
  let cScore = 0;

  const startGame = () => {
    const playBtn = document.querySelector(".startOptions");
    const playBtnClass = document.querySelector(".startOptions button");
    const startScreen = document.querySelector(".startPage");
    const gameScreen = document.querySelector(".gamePage");
    const gameOptions = document.querySelector(".gameOptions");

    playBtn.addEventListener("click", () => {
      playBtn.classList.add("fadeOut");
      playBtnClass.classList.add("fadeOut");
      startScreen.classList.add("fadeOut");
      gameScreen.classList.add("fadeIn");
      gameOptions.classList.add("fadeIn");
    });
  };

  const playGame = () => {
    const gameOptions = document.querySelectorAll(".gameOptions button");
    const playerHand = document.querySelector(".playerHand");
    const computerHand = document.querySelector(".computerHand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach(hand => {
      hand.addEventListener("animationend", function() {
        this.style.animation = "";
      });
    });

    const computerOptions = ["rock", "paper", "scissors"];

    gameOptions.forEach(option => {
      option.addEventListener("click", function() {
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];

        setTimeout(() => {
          compareHands(this.textContent, computerChoice);
          playerHand.src = `./${this.textContent}.png`;
          computerHand.src = `./${computerChoice}.png`;
        }, 2000);

        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });
  };

  const UpdateScore = () => {
    const playerScore = document.querySelector(".playerScore p");
    const computerScore = document.querySelector(".computerScore p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  const compareHands = (playerChoice, computerChoice) => {
    const winner = document.querySelector(".winner");

    if (playerChoice === computerChoice) {
      winner.textContent = "It's a tie";
      return;
    }

    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "Student wins";
        pScore++;
        UpdateScore();
        return;
      } else {
        winner.textContent = "Coach wins";
        cScore++;
        UpdateScore();
        return;
      }
    }

    if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        winner.textContent = "Coach wins";
        cScore++;
        UpdateScore();
        return;
      } else {
        winner.textContent = "Student wins";
        pScore++;
        UpdateScore();
        return;
      }
    }

    if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
        winner.textContent = "Coach wins";
        cScore++;
        UpdateScore();
        return;
      } else {
        winner.textContent = "Student wins";
        pScore++;
        UpdateScore();
        return;
      }
    }
  };

  startGame();
  playGame();
};

game();
