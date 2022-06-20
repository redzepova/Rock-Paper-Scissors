
//Computer's move//

function computerPlay() {
    let i = Math.floor(Math.random() *10) + 1;

    /* 2-4 = Rock
       5-7 = Paper
       8-10 = Scissors */

    if (i < 5) {
        return("Rock");
    } else if (i < 8) {
        return("Paper");
    } else {
        return("Scissors");
    }
}

let playerSelection = "";
const computerSelection = computerPlay();
let userScore = 0;
let compScore = 0;

// likely they don't match, so exclude matching first. then move on

// play a round. case-insensitive comparison of player selection
//and computer selection. 

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("Please choose Rock, Paper, or Scissors", '');
    let p = playerSelection.toLowerCase();
    let c = computerSelection.toLowerCase();
    let rockVersusPaper = Boolean((p === "rock" | p === "paper")&(c === "rock" | c ==="paper"));
    let rockVersusScissors = Boolean((p === "rock" | p === "scissors")&(c === "rock" | c ==="scissors"));
    let paperVersusScissors = Boolean((p === "scissors" | p === "paper")&(c === "scissors" | c ==="paper"));
    let tie = Boolean (p === c);

    console.log("You played " + playerSelection);
    console.log("The computer played " + computerSelection);

    if (tie) {
        console.log("Tie! No one wins!");
    } else if (rockVersusPaper) {
        if (c === "paper") {
            console.log("Paper covers rock. You lose. Try again!");
            compScore = compScore + 1;
        } else {
            console.log("Paper covers rock. You lose. Try again!");
            userScore = userScore + 1;

        }
    } else if (rockVersusScissors) {
        if (c === "scissors") {
            console.log("Rock smashes scissors. You win!");
            userScore = userScore + 1;
        } else {
            console.log("Rock smashes scissors. You lose. Try again!");
            compScore = compScore + 1;
        }
    } else if (paperVersusScissors) {
        if (c === "scissors") {
            console.log("Scissors cut paper. You lose. Try again!");
            compScore = compScore + 1;
        } else {
            console.log("Scissors cut paper. You win!");
            userScore = userScore + 1;
        }
    } else {
        console.log("Something wacky happened. Try again.");
    }

}
playRound(playerSelection, computerSelection);

function game() {
    for (let i = 1; i < 5; i++) {
        playRound(playerSelection, computerSelection);
    }

}

game();

console.log("Your Score: " + userScore);
console.log("Computer Score: " + compScore);
