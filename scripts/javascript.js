
function getComputerMove(){
  // Array of possible RPS moves
  let moveSet = ["ROCK", "PAPER", "SCISSORS"];
  // Simulate computer choosing random play
  let randomNum = Math.floor(Math.random() * moveSet.length);
  return moveSet[randomNum];
}

// function getPlayerMove(){
//   const playerChoice = window.prompt("Choose either [rock], [paper], or [scissors]").toUpperCase();
//   return playerChoice;
// }

function playRound(playerMove, computerMove){
  // Check whether player input legal move
  if(playerMove != "ROCK" && playerMove != "PAPER" && playerMove != "SCISSORS") {
    console.log("Player did not enter legal move. Exiting.");
    return;
  }

  // Output choices to log
  console.log("Player chooses: " + playerMove);
  console.log("Computer chooses: " + computerMove);

  // Determine winner
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


// RPS Button Events
const rockBtn = document.getElementById("rockBtn");
rockBtn.addEventListener('click', function(){
  playRound("ROCK", getComputerMove());
});





// function game(){

//   // Track number of games won
//   let playerWins = 0;
//   let computerWins = 0;

//   for (let round = 1; round <= 5; round++){
//     console.log("-= ROUND " + round + " =-")

//     let roundWinner = playRound(getPlayerMove(), getComputerMove());

//     // Increment scoreboard
//     switch(roundWinner){
//       case "tie":
//         round=round-1;
//         break;
//       case "player":
//         playerWins = playerWins + 1;
//         break;
//       case "computer":
//         computerWins = computerWins + 1;
//         break;
//     }

//     // Report results
//     console.log("Winner is: " + roundWinner);
//     console.log("");
//     console.log("Player has won " + playerWins + " round(s).");
//     console.log("Computer has won " + computerWins + " round(s).");
//     console.log("");
//   }

//   if(playerWins > computerWins){
//     console.log("Player is the winner!");
//   } else {
//     console.log("Computer won...too bad.")
//   }
// }

// game();


