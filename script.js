const compNameSelections = ['Albert', 'HAL 9000', 'Mother', 'Data', 
    'Mrs. Robinson', 'Mr. Roboto','The Undisputed Champion of Rock Paper Scissors', 
    'Eliza Doolittle', 'Jane Austin', 'TARDIS'];

function computerNameSelector () {
    let name = Math.floor(Math.random() * compNameSelections.length);
    return (compNameSelections[name]);
};

const start = document.querySelector('#startBtn');
const player = document.querySelector('#player');
const computer = document.querySelector('#computer');
let computerName = "";
let playerName = "";

start.addEventListener('click', () => {
    computerName = computerNameSelector();
    playerName = document.getElementById('nameInput').value;
    player.textContent = `${playerName}'s Score: ${playerScore}`;
    computer.textContent = `${computerName}'s Score: ${compScore}`;
});

const gameChoices = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    let choice = Math.floor(Math.random() * gameChoices.length);
    return(gameChoices[choice]);
}

let playerSelection = "";
let computerSelection = "";


let playerScore = 0
let compScore = 0

// likely they don't match, so exclude matching first. then move on

// play a round. case-insensitive comparison of player selection
//and computer selection. 

/*
      
    const userChoice = document.getElementById('userPlay');
    const compChoice = document.getElementById('computerPlay');
    userChoice.textContent = `${playerName} played ${playerSelection}.`
    compChoice.textContent = `${computerName} played ${computerSelection}.`
    console.log(computerSelection);

*/

console.log("Your Score: " + playerScore);
console.log("Computer Score: " + compScore);
let outcome = '';

function tie () {
    return `Tie! No one wins.`;
};
function computerWins () {
    compScore = ++compScore;
    return `${computerName} won! Try again!`;
};

function playerWins () {
    playerScore = ++playerScore;
    return `You win, ${playerName}! Keep going!`
}

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    playerSelection = "Rock";
    computerSelection = computerPlay();
    console.log(computerSelection);
    if (computerSelection === 'Rock') {
        outcome = tie();
    } else if (computerSelection === 'Paper') {
        outcome = computerWins();
    } else {
        outcome = playerWins();
    };
    console.log(outcome);
    console.log(playerScore);
    console.log(compScore);
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    playerSelection = 'Paper';
    computerSelection = computerPlay();
    console.log(computerSelection);
    if (computerSelection === 'Paper') {
        outcome = tie();
    } else if (computerSelection === 'Scissors') {
        outcome = computerWins();
    } else {
        outcome = playerWins();
    };
    console.log(outcome);
    console.log(playerScore);
    console.log(compScore);
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    playerSelection = 'Scissors'
    console.log(computerSelection);
    if (computerSelection === 'Scissors') {
        outcome = tie();
    } else if (computerSelection === 'Rock') {
        outcome = computerWins();
    } else {
        outcome = playerWins();
    };
console.log(outcome);
console.log(playerScore);
console.log(compScore);
//game();
});



