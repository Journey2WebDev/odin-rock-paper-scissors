// Set initial values
let roundNum = 0;
let playerWins = 0;
let computerWins = 0;
let gameWinner = "";

function resetGame(){
  // Reset values
  roundNum = 0;
  playerWins = 0;
  computerWins = 0;
  gameWinner = "";

  // Reset 'Game winner' on scoreboard 
  document.getElementById("gameWinner").textContent = gameWinner;
  updateScoreboard();
}

function updateScoreboard(){
  document.getElementById("roundNum").textContent = roundNum;
  document.getElementById("numWinsPlayer").textContent = playerWins;
  document.getElementById("numWinsCPU").textContent = computerWins;
  
  // Check if all rounds played (best of 5)
  if(roundNum == 5){
    gameOver();
  }
}

// Get random CPU move
function getComputerMove(){
  let moveSet = ["ROCK", "PAPER", "SCISSORS"];
  let randomNum = Math.floor(Math.random() * moveSet.length);
  return moveSet[randomNum];
}

function getRoundWinner(playerMove, computerMove){
  if(playerMove == computerMove){
    return "tie"
  } else if (playerMove == "ROCK" && computerMove == "PAPER"){
    return "computer"
  } else if (playerMove == "ROCK" && computerMove == "SCISSORS"){
    return "player"
  } else if (playerMove == "PAPER" && computerMove == "ROCK"){
    return "player"
  } else if (playerMove == "PAPER" && computerMove == "SCISSORS"){
    return "computer"
  } else if (playerMove == "SCISSORS" && computerMove == "ROCK"){
    return "computer"
  } else if (playerMove == "SCISSORS" && computerMove == "PAPER"){
    return "player"
  }
}

function playRound(playerMove, computerMove){
  // Determine round winner (player, cpu, or tie)
  let roundWinner = getRoundWinner(playerMove, computerMove);

  // Update scoreboard variables
  switch(roundWinner){
    case "tie":
      break;
    case "player":
      playerWins++;
      roundNum++;
      break;
    case "computer":
      computerWins++;
      roundNum++;
      break;
  }

  updateScoreboard();
}

function gameOver(){
  // Declare winner on scoreboard
  if(playerWins > computerWins){
    document.getElementById("gameWinner").textContent = "Player";
  } else {
    document.getElementById("gameWinner").textContent = "Computer";
  }

  // Remove Event Listener from RPS buttons
  // rockBtn.removeEventListener('click', function(){
  //   playRound("ROCK", getComputerMove());
  // });

  // paperBtn.removeEventListener('click', function(){
  //   playRound("PAPER", getComputerMove());
  // });
  
  // scissorsBtn.removeEventListener('click', function(){
  //   playRound("SCISSORS", getComputerMove());
  // });
}


// RPS Button Events
const rockBtn = document.getElementById("rockBtn");
rockBtn.addEventListener('click', function(){
  playRound("ROCK", getComputerMove());
});

const paperBtn = document.getElementById("paperBtn");
paperBtn.addEventListener('click', function(){
  playRound("PAPER", getComputerMove());
});

const scissorsBtn = document.getElementById("scissorsBtn");
scissorsBtn.addEventListener('click', function(){
  playRound("SCISSORS", getComputerMove());
});

// Game Reset Button Event
const resetGameBtn = document.getElementById("resetGameBtn");
resetGameBtn.addEventListener("click", function(){
  resetGame();
});
