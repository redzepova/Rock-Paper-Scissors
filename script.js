const start = document.querySelector('#startBtn');
const player = document.querySelector('#player');
const computer = document.querySelector('#computer');

start.addEventListener('click', () => {
    let playerName = document.getElementById('nameInput').value;
    player.textContent = `${playerName}'s Score: ${userScore}`;
    computer.textContent = `Computer's Score: ${compScore}`
});

const gameChoices = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    let choice = Math.floor(Math.random() * gameChoices.length);
    return(gameChoices[choice]);
}

let playerSelection = "";
let computerSelection = computerPlay();

let userScore = 0;
let compScore = 0;

// likely they don't match, so exclude matching first. then move on

// play a round. case-insensitive comparison of player selection
//and computer selection. 

function playRound(playerSelection, computerSelection) {
    //playerSelection = prompt("Please choose Rock, Paper, or Scissors", '');
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
            compScore = ++compScore;
        } else {
            console.log("Paper covers rock. You lose. Try again!");
            userScore = ++userScore;

        }
    } else if (rockVersusScissors) {
        if (c === "scissors") {
            console.log("Rock smashes scissors. You win!");
            userScore = ++userScore;
        } else {
            console.log("Rock smashes scissors. You lose. Try again!");
            compScore = ++compScore;
        }
    } else if (paperVersusScissors) {
        if (c === "scissors") {
            console.log("Scissors cut paper. You lose. Try again!");
            compScore = ++compScore;
        } else {
            console.log("Scissors cut paper. You win!");
            userScore = ++userScore;
        }
    } else {
        console.log("Something wacky happened. Try again.");
    };

};

function game() {
    playRound(playerSelection, computerSelection);
    computerSelection = computerPlay();

};

console.log("Your Score: " + userScore);
console.log("Computer Score: " + compScore);

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    playerSelection = "rock";
    console.log(playerSelection);
    game();
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    playerSelection = "paper";
    console.log(playerSelection);
    game();
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    playerSelection = 'scissors'
    console.log(playerSelection);
    game();
});

