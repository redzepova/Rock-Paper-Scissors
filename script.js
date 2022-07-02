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
const p = document.querySelector('#player');
const c = document.querySelector('#computer');
let computerName = '';
let playerName = '';
let winner = ''
let playerScore = 0
let compScore = 0

//fix this. pressing this button resets scores, but now they aren't automatically updating//
start.addEventListener('click', () => {
    computerName = computerNameSelector();
    playerName = document.getElementById('nameInput').value;
    playerScore = 0;
    compScore = 0;
    p.textContent = `${playerName}'s Score: ${playerScore}`;
    c.textContent = `${computerName}'s Score: ${compScore}`;
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

 
function tie() {
    console.log('tie');
    return 'Tie';
}


//Player selects rock. Compare choices and return winner.
const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    playerSelection = 'Rock';
    computerSelection = computerPlay(); //Computer makes choice after player.
    console.log(computerSelection);
    if (playerSelection === computerSelection){
        winner === tie();
    } else {
        winner = playGame(playerSelection, computerSelection);
        console.log(winner);
    };

    if (winner === 'Computer') {
        outcome = 'Paper covers rock. Try again!';
    } else if (winner === 'Player') {
        outcome = 'Paper smashes scissors. You win!';
    } else {
        outcome = 'Tie. You didn\'t lose, but you didn\'t win either.'
    };
    console.log(outcome);
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    playerSelection = 'Paper';
    computerSelection = computerPlay();
    console.log(computerSelection);
    if (playerSelection === computerSelection){
        outcome === tie();
    } else {
        winner = playGame(playerSelection, computerSelection);
        console.log(winner);
    };

    if (winner === 'Computer') {
        outcome = 'Scissors cut paper. You lose!';
    } else if (winner === 'Player') {
        outcome = 'Paper covers rock. You win!';
    } else {
        outcome = 'Tie. You didn\'t lose, but you didn\'t win either.'
    };
    console.log(outcome);
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    playerSelection = 'Scissors';
    computerSelection = computerPlay();
    console.log(computerSelection);
    if (playerSelection === computerSelection){
        outcome === tie();
    } else {
        winner = playGame(playerSelection, computerSelection);
        console.log(winner);
    };

    if (winner === 'Computer') {
        outcome = 'Rock smashes scissors. You lose!';
    } else if (winner === 'Player') {
        outcome = 'Scissors cut paper. You win!';
    } else {
        outcome = 'Tie. You didn\'t lose, but you didn\'t win either.'
    };
    console.log(outcome);
});

function playGame (p, c) {
    let rockVersusPaper = Boolean((p === 'Rock' | p === 'Paper')&
        (c === 'Rock' | c === 'Paper'));
    let rockVersusScissors = Boolean((p === 'Rock' | p === 'Scissors')&
        (c === 'Rock' | c === 'Scissors'));
    let paperVersusScissors = Boolean((p === 'Paper' | p === 'Scissors')&
        (c === 'Paper' | c === 'Scissors'));
    
    if (rockVersusPaper) {
        if(computerSelection === 'Paper') {
            return 'Computer';
        } else {
            return 'Player';
        };
    } else if (rockVersusScissors) {
        if(computerSelection === 'Rock') {
            return 'Computer';
        } else {
            return 'Player';
        };
    } else if (paperVersusScissors) {
        if(computerSelection === 'Scissors') {
            return 'Computer';
        } else {
            return 'Player';
        };
    } else {
        return 'Error'
    };
};






