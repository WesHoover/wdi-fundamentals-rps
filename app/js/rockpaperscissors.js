////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if (playerMove === computerMove) {
        winner = "tie";
    } else {
        switch (playerMove) {  
            case "rock":
                if (computerMove === "paper") {
                    winner = "Computer";
                }
                else if (computerMove === "scissors") {
                    winner = "Player";
                }
                break;    
            case "paper":
                if (computerMove === "scissors") {
                    winner = "Computer";
                }
                else if (computerMove === "rock") {
                    winner = "Player";
                }
                break;    
            case "scissors":
                if (computerMove === "rock") {
                    winner = "Computer";
                }
                else if (computerMove === "paper") {
                    winner = "Player";
                }
                break; 
            case "q":
                winner = "quit";
                break;
            case "quit":
                winner = "quit";
                break;
            default : 
                winner = "error";
                break;
        }
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    /* Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    console.log("Player chose " + playerMove + " while Computer chose " + computerMove);
    //  console.log("The score is currently " + playerWins + " to " + computerWins + "\n"); */
    while (playerWins < 5 && computerWins < 5) {
        console.log("Score is, Player: " + playerWins + " to Computer: " + computerWins + "\n");
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var winner = getWinner(playerMove,computerMove);
            if (winner === "quit") {
                console.log("****** Alrighty then, exiting the game ******"); 
            } else if (winner === "error") {
                console.log("Oops! Clumsy fingers? ;) Please, try that again.");
            } else {    
                console.log("You played " + playerMove + " and the Computer played " + computerMove + ".");
            }
            
            if (winner === "quit") {
                break;
            } else if (playerWins === 5 || computerWins === 5) {
                break;
            } else if (winner === "Player") {
                playerWins ++ ;
                console.log(winner + " " + "wins this round.");
            } else if (winner === "Computer") {
                computerWins ++ ;
                console.log(winner + " " + "wins this round.");
            } else if (winner === "tie") {
                console.log("You tied, keep playing!");
            } 
    }
    if (playerWins === 5) {
        console.log("You WON this game!"); 
    } else if (computerWins === 5) {
        console.log("Computer won this game. :( ");
    }
    return [playerWins, computerWins];

}

function playTo(x) {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    /* Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    console.log("Player chose " + playerMove + " while Computer chose " + computerMove);
    //  console.log("The score is currently " + playerWins + " to " + computerWins + "\n"); */
    while (playerWins < x && computerWins < x) {
        console.log("Score is, Player: " + playerWins + " to Computer: " + computerWins + "\n");
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var winner = getWinner(playerMove,computerMove);
            if (winner === "quit") {
                console.log("******Alrighty then, exiting the game******"); 
            } else if (winner === "error") {
                console.log("Oops! Clumsy fingers? ;) Please, try that again.");
            } else {    
                console.log("You played " + playerMove + " and the Computer played " + computerMove + ".");
            }
            
            if (winner === "quit") {
                break;
            } else if (playerWins === x || computerWins === x) {
                break;
            } else if (winner === "Player") {
                playerWins ++ ;
                console.log(winner + " " + "wins this round.");
            } else if (winner === "Computer") {
                computerWins ++ ;
                console.log(winner + " " + "wins this round.");
            } else if (winner === "tie") {
                console.log("You tied, keep playing!");
            } 
            
    }
    if (playerWins === x) {
        console.log("You WON this game!"); 
    } else if (computerWins === x) {
        console.log("Computer won this game. :( ");
    }
    return [playerWins, computerWins];

}



