const argv = require("yargs").argv;

module.exports = (function () {
  if (argv._[0]) {
    console.log("You passed:", argv._[0]);
    let computerChoice = Math.floor(Math.random() * 3);
    // 0 = Rock
    // 1 = Paper
    // 2 = Scissors
    let playerChoice;
    switch (argv._[0]) {
      case "rock":
        playerChoice = 0;
        break;
      case "paper":
        playerChoice = 1;
        break;
      case "scissors":
        playerChoice = 2;
        break;
      default:
        console.log("Error - you must enter rock, paper or scissors");
    }
    console.log("Player Choice:", playerChoice);
    console.log("Computer Choice", computerChoice);
    if (playerChoice == computerChoice) {
      console.log("Tie!");
    } else if (
      playerChoice > computerChoice &&
      playerChoice == 2 &&
      computerChoice == 0
    ) {
      console.log("The computer wins! Player loses");
    } else if (playerChoice > computerChoice) {
      console.log("Player beats computer");
    } else {
      console.log("The computer beat the player! ");
    }
  } else {
    console.log("Error - Try, rock, paper or scissors after the filename");
    console.log("Try this: node RockPaperScissors.js paper");
  }
})();
