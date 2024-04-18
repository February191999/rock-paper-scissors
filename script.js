const choices = ["rock", "paper", "scissors"]; //Create list of choices

function getNumberChoice() {
    let numberChoice = Math.floor(Math.random() * 3); //Generates random number between 0 and 2
    return numberChoice;
}

function getComputerChoice() {
    let computerChoice = choices[getNumberChoice()]; //Index into random number generated from numberChoice

    return computerChoice;
}

let playerInput = window.prompt("What will you play?", "");

let playerChoice = playerInput.toLowerCase();

const playerSelection = playerChoice;

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return `Tied! You chose ${playerSelection} against your opponent's ${computerSelection}!`  
    } else if (
        playerSelection === "Rock" && computerSelection === "Scissors" || 
        playerSelection === "Scissors" && computerSelection === "Paper" || 
        playerSelection === "Paper" && computerSelection === "Rock"
        ) {
            return `You won! You chose ${playerSelection} against your opponent's ${computerSelection}!`
    } else if (playerSelection === "") {
        return "Please enter your choice!"
    } else {
        return `You lost! You chose ${playerSelection} against your opponent's ${computerSelection}!`
    }
}

const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));