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
let winningPlay = '';

//updated DOM
outcome = document.querySelector('#outcome');
winnerMessage = document.querySelector('#winner');
playerChose = document.querySelector('#playerChose');
computerChose = document.querySelector('#computerChose');
startBin = document.querySelector('#start');
startBin.style.display = 'block';
endBin = document.querySelector('#end');
endBin.style.display = 'none';
gameBin = document.querySelector('#game');
gameBin.style.display = 'none';
playAgain = document.querySelector('#return');
scoreKeeper = document.querySelector('.scoreKeeper')
scoreKeeper.style.visibility = 'hidden';
endMessage = document.querySelector('#endMessage');
returnMessage = document.querySelector('#returnMessage');
returnMessage.style.visibility = 'hidden';


playAgain.addEventListener ('click', () => {
    endBin.style.display = 'none';
    player = 0;
    computer = 0;
    startBin.style.display = 'block';
    scoreKeeper.style.visibility = 'hidden';
    endMessage.textContent = ''
    returnMessage.style.visibility = 'hidden';
})

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
    startBin.style.display = 'none';
    gameBin.style.display = 'block';
    scoreKeeper.style.visibility = 'visible';
});

//Computer choice function

const gameChoices = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    let choice = Math.floor(Math.random() * gameChoices.length);
    return(gameChoices[choice]);
}

function determineWinner(wp, p) {
    if (wp === p) {
        winnerMessage.textContent = 'You win! Play again, winner! '
        player = ++player;
        pScore.textContent = player;
        console.log(player);
    } else {
        winnerMessage.textContent = `${computerName} won this round. Too bad. Try again! `
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
    returnMessage.style.visibility = 'visible';
    playerChose.textContent = `You played ${playerChoice}. `;
    computerChose.textContent = `${computerName} played ${computerChoice}. `;
    if (playerChoice === computerChoice) {
        outcome.textContent = `Tie! No one wins. Try again. `
        winnerMessage.textContent = '';
    } else {
        winningPlay = playGame(playerChoice, computerChoice);
        determineWinner(winningPlay, playerChoice);
    };
    keepScore();
});

const paper = document.querySelector('#Paper');
paper.addEventListener('click', () => {
    playerChoice ='Paper';
    computerChoice = computerPlay();
    returnMessage.style.visibility = 'visible';
    playerChose.textContent = `You played ${playerChoice}. `;
    computerChose.textContent = `${computerName} played ${computerChoice}. `;
    if (playerChoice === computerChoice) {
        outcome.textContent = `Tie! No one wins. Try again. `
        winnerMessage.textContent = '';
    } else {
        winningPlay = playGame(playerChoice, computerChoice);
        determineWinner(winningPlay, playerChoice);
    };
    keepScore();
});

   

const scissors = document.querySelector('#Scissors');
scissors.addEventListener('click', () => {
    playerChoice ='Scissors';
    computerChoice = computerPlay();
    returnMessage.style.visibility = 'visible';
    playerChose.textContent = `You played ${playerChoice}. `;
    computerChose.textContent = `${computerName} played ${computerChoice}. `;
    if (playerChoice === computerChoice) {
        outcome.textContent = `Tie! No one wins. Try again. `
        winnerMessage.textContent = '';
    } else {
        winningPlay = playGame(playerChoice, computerChoice);
        determineWinner(winningPlay, playerChoice);
    };
    keepScore();
}); 


function playGame (p, c) {
    let rockVersusPaper = Boolean((p === 'Rock' || p === 'Paper')&&(c === 'Rock' || c === 'Paper'));
    let rockVersusScissors = Boolean((p === 'Rock' || p === 'Scissors') && (c === 'Scissors' || c === 'Rock'));
    let paperVersusScissors = Boolean((p === 'Paper' || p === 'Scissors')&&(c === 'Paper' || c === 'Scissors'));
    
    if (rockVersusPaper) {
        winningPlay = 'Paper';
        outcome.textContent = `Paper covers rock. `;
    } else if (rockVersusScissors) {
        winningPlay = 'Rock';
        outcome.textContent ='Rock smashes scissors. ';
    } else if (paperVersusScissors) {
        winningPlay = 'Scissors';
        outcome.textContent = 'Scissors cut paper. ';
    } else {
        winningPlay = 'Error';
        outcome.textContent = 'Something went wrong. ';
    };
    return winningPlay;

};

function keepScore() {
    if (player === 5 || computer === 5) {
        endBin.style.display = 'block';
        gameBin.style.display = 'none';
        if(player === 5) {
        endMessage.textContent = `The new champion of Rock Paper Scissors: ${playerName}! Congratulations! `
        } else {
        endMessage.textContent = `${computerName} remains champion. Live to fight another day, ${playerName}. `
     };
    } else {
        endMessage.textContent = `Something weird happened. Try playing again.`
    };
};








