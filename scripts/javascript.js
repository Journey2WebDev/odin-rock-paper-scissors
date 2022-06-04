// Scoreboard initial value
let roundNum = 1;
document.getElementById("roundNum").textContent = roundNum;
let playerWins = 0;
document.getElementById("numWinsPlayer").textContent = playerWins;
let computerWins = 0;
document.getElementById("numWinsCPU").textContent = computerWins;
document.getElementById("gameWinner").textContent = "";

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
  // Determine winner, or tie
  let roundWinner = getRoundWinner(playerMove, computerMove);

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

function updateScoreboard(){
  document.getElementById("numWinsPlayer").textContent = playerWins;
  document.getElementById("numWinsCPU").textContent = computerWins;
  document.getElementById("roundNum").textContent = roundNum;

  // Check if game won (best of 5)
  if(roundNum > 5){
    if(playerWins > computerWins){
      document.getElementById("gameWinner").textContent = "Player";
    } else {
      document.getElementById("gameWinner").textContent = "Computer";
    }
  }
}

function gameReset(){
  roundNum=1;
  playerWins=0;
  computerWins=0;

  document.getElementById("roundNum").textContent = 1;
  document.getElementById("numWinsPlayer").textContent = 0;
  document.getElementById("numWinsCPU").textContent = 0;
  document.getElementById("gameWinner").textContent = "";
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
const gameResetBtn = document.getElementById("gameResetBtn");
gameResetBtn.addEventListener("click", function(){
  gameReset();
});
