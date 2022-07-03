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
const pName = document.querySelector('#playerName');
const cName = document.querySelector('#computerName');
const pScore = document.querySelector('#playerScore');
const cScore = document.querySelector('#computerScore');
let computerName = '';
let playerName = '';
let winner = '';
let player = 0;
let computer = 0;
let playerChoice = '';
let computerChoice = '';
let winningPlay = 'Butthole';

//updated DOMS
outcome = document.querySelector('#outcome');
winnerMessage = document.querySelector('#winner');
playerChose = document.querySelector('#playerChose');
computerChose = document.querySelector('#computerChose');


//fix this. pressing this button resets scores, but now they aren't automatically updating//
start.addEventListener('click', () => {
    computerName = computerNameSelector();
    playerName = document.getElementById('nameInput').value;
    playerScore = 0;
    compScore = 0;
    //Once player hit's the 'play button, names and scores populate
    pName.textContent = `${playerName}'s Score: `;
    pScore.textContent = `${player}`;
    cName.textContent = `${computerName}'s Score: `;
    cScore.textContent = `${computer}`;
});

//Computer choice function

const gameChoices = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    let choice = Math.floor(Math.random() * gameChoices.length);
    return(gameChoices[choice]);
}

function determineWinner(wp, p) {
    if (wp === p) {
        winnerMessage.textContent = 'You win! Play again, winner!'
        player = ++player;
        pScore.textContent = player;
        console.log(player);
    } else {
        winnerMessage.textContent = `${computerName} won this round. Too bad. Try again!`
        computer = ++computer;
        cScore.textContent = computer;
        console.log(computer);
    };
};


//Player selects rock. Compare choices and return winner.
const rock = document.querySelector('#Rock');
rock.addEventListener('click', () => {
    playerChoice ='Rock';
    computerChoice = computerPlay();
    playerChose.textContent = `You played ${playerChoice}. `;
    computerChose.textContent = `${computerName} played ${computerChoice}. `;
    if (playerChoice === computerChoice) {
        outcome.textContent = `Tie! No one wins. Try again.`
        winnerMessage.textContent = '';
    } else {
        winningPlay = playGame(playerChoice, computerChoice);
        determineWinner(winningPlay, playerChoice);
    };
});

/*const paper = document.querySelector('#Paper');
paper.addEventListener('click', () => {
    playerChoice ='Paper';
    computerChoice = computerPlay();
    playerChose.textContent = `You played ${playerChoice}. `;
    computerChose.textContent = `${computerName} played ${computerChoice}. `;
    if (playerChoice === computerChoice) {
        outcome.textContent = `Tie! No one wins. Try again.`
        winnerMessage.textContent = '';
    } else {
        winningPlay = playGame(playerChoice, computerChoice);
        determineWinner(winningPlay, playerChoice);
    };
});
   

const scissors = document.querySelector('#Scissors');
scissors.addEventListener('click', () => {
    playerChoice ='Scissors';
    computerChoice = computerPlay();
    playerChose.textContent = `You played ${playerChoice}. `;
    computerChose.textContent = `${computerName} played ${computerChoice}. `;
    if (playerChoice === computerChoice) {
        outcome.textContent = `Tie! No one wins. Try again.`
        winnerMessage.textContent = '';
    } else {
        winningPlay = playGame(playerChoice, computerChoice);
        determineWinner(winningPlay, playerChoice);
    };
}); */


function playGame (p, c) {
    let rockVersusPaper = Boolean((p === 'Rock' || p === 'Paper')&&(c === 'Rock' || c === 'Paper'));
    let rockVersusScissors = Boolean((p === 'Rock' || p === 'Scissors') && (c === 'Scissors' || c === 'Rock'));
    let paperVersusScissors = Boolean((p === 'Paper' || p === 'Scissors')&&(c === 'Paper' || c === 'Scissors'));
    
    if (rockVersusPaper) {
        winningPlay = 'Paper';
        outcome.textContent = `Paper covers rock.`;
    } else if (rockVersusScissors) {
        winningPlay = 'Rock';
        console.log(winningPlay);
        outcome.textContent ='Rock smashes scissors.';
    } else if (paperVersusScissors) {
        winningPlay = 'Scissors';
        outcome.textContent = 'Scissors cut paper.';
    } else {
        winningPlay = 'Error';
        outcome.textContent = 'Something went wrong.';
    };
    return winningPlay;

};







