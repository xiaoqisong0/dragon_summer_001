// numberGuessingGame.js  
  
function startGame() {  
    return {  
      randomNumber: Math.floor(Math.random() * 10) + 1,  
      guessCount: 0,  
      guessLimit: 4,  
      gameStatus: 'playing'  
    };  
  }  
    
function checkGuess(gameState, userGuess) {  
    if (gameState.guessCount >= gameState.guessLimit) {  
      gameState.gameStatus = 'lost';  
      console.log('很遗憾，您没有在四次机会内猜中数字。');  
      return gameState;  
    }  
      
    if (userGuess === gameState.randomNumber) {  
      gameState.gameStatus = 'won';  
      console.log('恭喜您，您猜对了！');  
    } else if (userGuess < gameState.randomNumber) {  
      console.log('猜的数字太小了，请再试一次。');  
    } else {  
      console.log('猜的数字太大了，请再试一次。');  
    }  
      
    gameState.guessCount++;  
    return gameState;  
  }  
    
  // 导出这两个方法  
  module.exports = {  
    startGame,  
    checkGuess  
  };