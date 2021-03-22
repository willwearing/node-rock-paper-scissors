const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let computerChoice = Math.floor(Math.random() * 3);
let cpuChoices = {
  1: "Rock",
  2: "Paper",
  3: "Scissors",
};
rl.question("Rock, Paper or Scissors? ", function (choice) {
  switch (cpuChoices[computerChoice]) {
    case "Rock":
      if (choice === "Rock") {
        console.log("Draw");
      } else if (choice === "Paper") {
        console.log("Player wins");
      } else if (choice === "Scissors") {
        console.log("Computer wins");
      }
      break;
    case "Scissors":
      if (choice === "Rock") {
        console.log("Player wins");
      } else if (choice === "Paper") {
        console.log("Computer wins");
      } else if (choice === "Scissors") {
        console.log("Draw");
      }
      break;
    case "Paper":
      if (choice === "Rock") {
        console.log("Computer wins");
      } else if (choice === "Paper") {
        console.log("Draw");
      } else if (choice === "Scissors") {
        console.log("Player wins");
      }
      break;
  }
  console.log(
    `You chose "${choice}" and the Computer chose "${cpuChoices[computerChoice]}"`
  );
  rl.close();
});

rl.on("close", function () {
  console.log("\nRun 'node Test.js' to play again!'");
  process.exit(0);
});

//test
