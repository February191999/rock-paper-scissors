const choices = ["rock", "paper", "scissors"]; //Create list of choices

function getNumberChoice() {
    let numberChoice = Math.floor(Math.random() * 3); //Generates random number between 0 and 2
    return numberChoice;
}

function getComputerChoice() {
    let computerChoice = choices[getNumberChoice()]; //Index into random number generated from numberChoice

    return computerChoice;
}

let playerChoice = window.prompt("What will you play?", "").toLowerCase();

function whoWon() {
    if (playerSelection === computerSelection) {
        return "Tied"  
    } else if (
        playerSelection === "Rock" && computerSelection === "Scissors" || 
        playerSelection === "Scissors" && computerSelection === "Paper" || 
        playerSelection === "Paper" && computerSelection === "Rock"
        ) {
            return "Player"
    } else {
        return "Computer"
    }
}

const playerSelection = playerChoice;

function playRound(playerSelection, computerSelection) {

    whoWon();
    
    playerSelection = window.prompt("What will you play?", "").toLowerCase();

    if (whoWon() === "Tied") {
        return `Tied! You chose ${playerSelection} against your opponent's ${computerSelection}!`  
    } else if (whoWon() === "Player") {
            return `You won! You chose ${playerSelection} against your opponent's ${computerSelection}!`
    } else if (playerSelection === "") {
        return "Please enter your choice!"
    } else {
        return `You lost! You chose ${playerSelection} against your opponent's ${computerSelection}!`
    }
}

const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    let match = 5;

    for (i = 0; i < match; i++){
        playRound(playerSelection, computerSelection);
        if (whoWon() === "Tied") {
            continue;
        } else if (whoWon() === "Player") {
            ++playerScore;
            console.log(`Nice! Player Score: ${playerScore}`)
            console.log(`Computer Score: ${computerScore}`)
        } else {
            ++computerScore;
            console.log(`Oh No! Player Score: ${playerScore}`)
            console.log(`Computer Score: ${computerScore}`)
        }
    }

    if (i === 5 && playerScore === 3) {
        console.log("Congratulations! You're the champion!")
    } else if (i === 5 && computerScore === 3) {
        console.log("Game Over! You Lose!")
    }
}

playGame();