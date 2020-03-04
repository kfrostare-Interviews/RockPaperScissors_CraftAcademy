const game = () => {
  let pScore = 0;
  let cScore = 0;

  // Fades parts of the page
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

  // Activates the game features
  const playGame = () => {
    const gameOptions = document.querySelectorAll(".gameOptions button");
    const playerHand = document.querySelector(".playerHand");
    const computerHand = document.querySelector(".computerHand");
    const hands = document.querySelectorAll(".hands img");

    // Hand animation
    hands.forEach(hand => {
      hand.addEventListener("animationend", function() {
        this.style.animation = "";
      });
    });

    // The computer's options is an array of 3 strings
    const computerOptions = ["rock", "paper", "scissors"];

    // Listens after click on any of the three buttons
    gameOptions.forEach(option => {
      option.addEventListener("click", function() {
        
        // "random" only generates btw 0-1, so we add 3
        // math.floor turns floats into integers
        const computerNumber = Math.floor(Math.random() * 3);

        // turns our chosen number into either rock, paper or scissors
        const computerChoice = computerOptions[computerNumber];

        // compareHands is the function that declares a winner
        setTimeout(() => {
          compareHands(this.textContent, computerChoice);

          // this function picks images according to their names
          playerHand.src = `./img/${this.textContent}.png`;
          computerHand.src = `./img/${computerChoice}.png`;
        }, 2000);

        //animation
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });
  };

  // this updates the scoreboard
  const UpdateScore = () => {
    const playerScore = document.querySelector(".playerScore p");
    const computerScore = document.querySelector(".computerScore p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  // this method is the game rules
  const compareHands = (playerChoice, computerChoice) => {
    // this function declares a winner (changes the winner- text)
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

  // executes inner functions of the game
  startGame();
  playGame();
};

// executes the game function
game();
