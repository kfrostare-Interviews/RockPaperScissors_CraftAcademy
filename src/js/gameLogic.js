const game = () => { // logbook index #1 
  // logbook index #2
  let pScore = 0; 
  let cScore = 0;

  const startGame = () => { // logbook index #3
    const playBtn = document.querySelector(".startOptions");
    const startScreen = document.querySelector(".startPage");
    const gameScreen = document.querySelector(".gamePage");
    const gameOptions = document.querySelector(".gameOptions");
    
    playBtn.addEventListener("click", () => { // logbook index #4
      playBtn.classList.add("fadeOut");
      startScreen.classList.add("fadeOut");
      gameScreen.classList.add("fadeIn");
      gameOptions.classList.add("fadeIn");
    });
  };

  const playGame = () => { // logbook index #5
    const gameOptions = document.querySelectorAll(".gameOptions button"); // logbook index #6
    const playerHand = document.querySelector(".playerHand"); // logbook index #7
    const computerHand = document.querySelector(".computerHand");
    const computerOptions = ["rock", "paper", "scissors"]; // logbook index #8

    gameOptions.forEach(option => { // logbook index #9
      option.addEventListener("click", function() {
        const computerNumber = Math.floor(Math.random() * 3); // logbook index #10
        const computerChoice = computerOptions[computerNumber]; // logbook index #11
        
        // logbook index #12
        
        playerHand.img = `./img/${this.textContent}.png`;// logbook index #13
        computerHand.img = `./img/${computerChoice}.png`;
      });
    });
  };

  const compareHands = (playerChoice, computerChoice) => { // logbook index #14
    const winner = document.querySelector(".winner"); // logbook index #15
  
    if(playerChoice === computerChoice){ // logbook index #16
        winner.textContent = "It is a tie";
        return;
    }
    
    if(playerChoice === "rock"){ // logbook index #17
      if(computerChoice === "scissors"){
        winner.textContent = "player wins";
        return;
      }else{
        winner.textContent = "Computer wins";
        return;
      }
    }

    if(playerChoice === "paper"){ // logbook index #18
      if(computerChoice === "scissors"){
        winner.textContent = "computer wins";
        return;
      }else{
        winner.textContent = "Player wins";
        return;
      }
    }

    if(playerChoice === "scissors"){ // logbook index #19
      if(computerChoice === "rock"){
        winner.textContent = "computer wins";
        return;
      }else{
        winner.textContent = "Player wins";
        return;
      }
    }
  }

  startGame(); // logbook index #20
  playGame();

};

game(); // logbook index #21