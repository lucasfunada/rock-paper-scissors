/*
    Receive input from player (rock, paper or scissors)
    Randomize computer choice
    Check who won
    Declare winner
*/

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        return "rock";
    }
    else if(computerChoice === 1) {
        return "paper";
    }
    return "scissors";
}

function playRound (computerChoice, playerChoice) {
    playerChoice = playerChoice.toLowerCase();
    if(playerChoice === "rock") {
        if(computerChoice === "rock") {
            return "Draw! Rock draws with Rock!";
        }
        else if (computerChoice === "scissors") {
            return "You Win! Rock beats Scissors!";
        }
        return "You Lose! Paper beats Rock!";
    }
    else if(playerChoice === "paper") {
        if(computerChoice === "rock") {
            return "You Win! Paper beats Rock!";
        }
        else if (computerChoice === "scissors") {
            return "You Lose! Scissors beats Paper!";
        }
        return "Draw! Paper draws with Paper!";
    }
    if(computerChoice === "rock") {
        return "You Lose! Rock beats Scissors!";
    }
    else if (computerChoice === "scissors") {
        return "Draw! Scissors draws with Scissors!";
    }
    return "You Win! Scissors beats Paper!";
}

