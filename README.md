# Rock-Paper-Scissors

Creating a game of rock paper scissors as part of the Odin Project funadmentals course. I will be using javascript to program my game.

The user will play rock paper scissors against the computer in a series of rounds. All games are played in the console, eventually moving to an interactive Rock Paper Scissors website.

Required functions:

computerPlay: randomly returns "Rock", "Paper", or "Scissors"

Randomly assigned from array
    

function2: plays one round of rock paper scissors. Requires two parameters - computerSelection and playerSelection (TOP names it playRound)

For basic game:

Computer selects first. Prompt asks for user imput. Using .toLowerCase to complete case insensitive match.

If the computer and user match => "Tie! Try again."

If the combo is Rock versus paper
    If the computer is rock => "Paper covers rock. You win!"
    Else => "Paper covers rock. You lose. Better luck next time!"
If the combo is rock versus scissors
    if the computer is rock => "Rock smashes scissors. You lose. Better luck next time!"
    else => "Rock smashes scissors. You win!"
If the combo is scissors versus paper
    if the computer is scissors => "Scissors cut paper. You lose. Better luck next time!"
    Else => "Scissors cut paper. You win!"

