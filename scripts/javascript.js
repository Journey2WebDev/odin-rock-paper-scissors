// Scoreboard initial values

let roundNum = 1;
document.getElementById("roundNum").textContent = roundNum;
let playerWins = 0;
document.getElementById("numWinsPlayer").textContent = playerWins;
let computerWins = 0;
document.getElementById("numWinsCPU").textContent = computerWins;

// Simulate computer choosing random play
function getComputerMove(){
  // Array of possible RPS moves
  let moveSet = ["ROCK", "PAPER", "SCISSORS"];
  let randomNum = Math.floor(Math.random() * moveSet.length);
  return moveSet[randomNum];
}

function determineWinner(playerMove, computerMove){
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
  // Output choices to log
  console.log("Player chooses: " + playerMove);
  console.log("Computer chooses: " + computerMove);

  // Determine winner, or tie
  let roundWinner = determineWinner(playerMove, computerMove);

  // Update Scoreboard
  updateScoreboard(roundWinner);

}

function updateScoreboard(roundWinner){
  switch(roundWinner){
    case "tie":
      break;
    case "player":
      playerWins++;
      document.getElementById("numWinsPlayer").textContent = playerWins;
      break;
    case "computer":
      computerWins++;
      document.getElementById("numWinsCPU").textContent = computerWins;
      break;
  }

  // Iterate Round
  document.getElementById("roundNum").textContent = roundNum++;

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


