// Set initial values
let numWon = 0;
let numLost = 0;
let numTied = 0
let gameWinner = "";

function resetGame(){
  // Reset values
  numWon = 0;
  numLost = 0;
  numTied = 0
  gameWinner = "";

  // Reset 'Game winner' on scoreboard 
  document.getElementById("gameWinner").textContent = gameWinner;

  // Add listeners back on RPS buttons
  rockBtn.addEventListener('click', playRock);
  paperBtn.addEventListener('click', playPaper);
  scissorsBtn.addEventListener('click', playScissors);
  
  updateScoreboard();
}

function updateScoreboard(){
  document.getElementById("numWon").textContent = numWon;
  document.getElementById("numLost").textContent = numLost;
  document.getElementById("numTied").textContent = numTied;
  
  // Check if either Player or Computer has 5 wins
  if(numWon == 5 || numLost == 5){
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
    return "tied"
  } else if (playerMove == "ROCK" && computerMove == "PAPER"){
    return "lost"
  } else if (playerMove == "ROCK" && computerMove == "SCISSORS"){
    return "won"
  } else if (playerMove == "PAPER" && computerMove == "ROCK"){
    return "won"
  } else if (playerMove == "PAPER" && computerMove == "SCISSORS"){
    return "lost"
  } else if (playerMove == "SCISSORS" && computerMove == "ROCK"){
    return "lost"
  } else if (playerMove == "SCISSORS" && computerMove == "PAPER"){
    return "won"
  }
}

function playRound(playerMove, computerMove){
  // Determine round winner (won, lost, or tied)
  let roundWinner = getRoundWinner(playerMove, computerMove);

  // Update scoreboard variables
  switch(roundWinner){
    case "won":
      numWon++;
      break;
    case "lost":
      numLost++;
      break;
    case "tied":
      numTied++;
      break;      
  }

  updateScoreboard();
}

function gameOver(){
  // Declare winner on scoreboard
  if(numWon > numLost){
    document.getElementById("gameWinner").textContent = "Player";
  } else {
    document.getElementById("gameWinner").textContent = "Computer";
  }

  // Remove Event Listener from RPS buttons
  rockBtn.removeEventListener('click', playRock);
  paperBtn.removeEventListener('click', playPaper);
  scissorsBtn.removeEventListener('click', playScissors);
}


// RPS Button Events
function playRock(){
  playRound("ROCK", getComputerMove());
};
const rockBtn = document.getElementById("rockBtn");
rockBtn.addEventListener('click', playRock);

function playPaper(){
  playRound("PAPER", getComputerMove());
};
const paperBtn = document.getElementById("paperBtn");
paperBtn.addEventListener('click', playPaper);

function playScissors(){
  playRound("SCISSORS", getComputerMove());
};
const scissorsBtn = document.getElementById("scissorsBtn");
scissorsBtn.addEventListener('click', playScissors);

// Game Reset Button Event
const resetGameBtn = document.getElementById("resetGameBtn");
resetGameBtn.addEventListener("click", resetGame);


