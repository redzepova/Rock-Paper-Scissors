//computer name selector//

const compNameSelections = ['Albert', 'HAL 9000', 'Mother', 'Data', 
    'Mrs. Robinson', 'Mr. Roboto','The Undisputed Champion of Rock Paper Scissors', 
    'Eliza Doolittle', 'Jane Austin', 'TARDIS'];

function computerNameSelector () {
    let name = Math.floor(Math.random() * compNameSelections.length);
    return (compNameSelections[name]);
};

//interactive buttons//
const start = document.querySelector('#startBtn');
const player = document.querySelector('#player');
const computer = document.querySelector('#computer');
let computerName = "";
let playerName = "";
let playerScore = 0
let compScore = 0

//fix this. pressing this button resets scores, but now they aren't automatically updating//
start.addEventListener('click', () => {
    computerName = computerNameSelector();
    playerName = document.getElementById('nameInput').value;
    playerScore = 0;
    compScore = 0;
    player.textContent = `${playerName}'s Score: ${playerScore}`;
    computer.textContent = `${computerName}'s Score: ${compScore}`;
    return computerName;
});

//Computer makes a choice//

const gameChoices = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    let choice = Math.floor(Math.random() * gameChoices.length);
    return(gameChoices[choice]);
}

//initial declaration of variables//

let playerSelection = "";
let computerSelection = "";

console.log("Your Score: " + playerScore);
console.log("Computer Score: " + compScore);
let outcome = '';

function tie () {
    return `Tie! No one wins.`;
};
function computerWins () {
    return `${computerName} won! Try again!`;
};

function playerWins () {
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
//console.log(outcome);
console.log(playerScore);
console.log(compScore);
//game();
});

const outcomeMessage = document.querySelector('#outcome');
outcomeMessage.textContent = outcome;
console.log(outcome);



