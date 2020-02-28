// this function is the whole game
const game = () => {
  // here I put stuff I need multiple times.
  let pScore = 0; 
  let cScore = 0;

  // this is the "start game"- function, it just fades the pages, 
  // I make it its own constant because I'll only use it once.
  const startGame = () => {
    const playBtn = document.querySelector('.startOptions');
    const startScreen = document.querySelector('.startPage');
    const gameScreen = document.querySelector('.gamePage');
    const gameOptions = document.querySelector('.gameOptions')
    
    // every time you click on the startPage button the following events will run
    playBtn.addEventListener('click', () => {
      playBtn.classList.add('fadeOut')
      startScreen.classList.add('fadeOut'); // when somebody clicks a button on the start page we want to fade the start page out
      gameScreen.classList.add('fadeIn');
      gameOptions.classList.add('fadeIn');
    });
  };

  // this calls/executes the inner functions
  startGame();
  updateScore();


};

// starts/executes the game function
game();