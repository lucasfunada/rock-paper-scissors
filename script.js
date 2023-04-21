/*
    Receive input from player (rock, paper or scissors)
    Randomize computer choice
    Check who won
    Declare winner
*/

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        return "Rock";
    }
    else if(computerChoice === 1) {
        return "Paper";
    }
    return "Scissors";
}

function playRound (computerChoice, playerChoice) { // 0 = Draw  1 = Player Win  2 = Computer Win
    if(playerChoice === "Rock") {
        if(computerChoice === "Rock") {
            return 0;
        }
        else if (computerChoice === "Paper") {
            return 2;
        }
        return 1;
    }
    else if(playerChoice === "Paper") {
        if(computerChoice === "Rock") {
            return 1;
        }
        else if (computerChoice === "Paper") {
            return 0;
        }
        return 2;
    }
    if(computerChoice === "Rock") {
        return 2;
    }
    else if (computerChoice === "Paper}") {
        return 1;
    }
    return 0;
}

function game() {
    let playerChoice, computerChoice, result, playerPts = 0, computerPts = 0;
    for (let i = 1; i <= 5; i++) {
        console.log(`Round ${i}`);
        playerChoice = prompt("Choose Rock, Paper or Scissors!");
        playerChoice = playerChoice.toLowerCase();
        while (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors") {
            console.log("Invalid Option!");
            playerChoice = prompt("Choose Rock, Paper or Scissors!");
            playerChoice = playerChoice.toLowerCase();
        }
        playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1); // Capitalizes first letter
        computerChoice = getComputerChoice();
        result = playRound(playerChoice, computerChoice);
        if(result === 0) {
            console.log(`Draw! ${playerChoice} draws with ${computerChoice}!`);
        }
        else if (result === 1) {
            console.log(`You Win! ${playerChoice} beats ${computerChoice}!`);
            playerPts++;
        }
        else if (result === 2) {
            console.log(`You Lose! ${computerChoice} beats ${playerChoice}!`);
            computerPts++;
        }
    }
    if (playerPts > computerPts) {
        console.log(`Nice one! You won ${playerPts}-${computerPts}!`);
    }
    else if (playerPts < computerPts) {
        console.log(`Too bad! You lost ${playerPts}-${computerPts}!`);
    }
    else if (playerPts === computerPts) {
        console.log(`Try again! You drew ${playerPts}-${computerPts}`);
    }
}