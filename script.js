const choices = ["Rock", "Paper", "Scissors"]; //Create list of choices

function getNumberChoice() {
    let numberChoice = Math.floor(Math.random() * 3); //Generates random number between 0 and 2
    return numberChoice;
}

function getComputerChoice() {
    let computerChoice = choices[getNumberChoice()]; //Index into random number generated from numberChoice
    console.log(computerChoice);

    return computerChoice;
}

getComputerChoice();

let playerInput = window.prompt("What will you play?", "");

// console.log(playerInput);

function playerLower() {
    let choiceLower = playerInput.toLowerCase(); //Converts input to lower case

    return choiceLower;
}

function playerCapitalizeFirst() {


    let capitalizeFirst = playerLower()[0].toUpperCase() + playerLower().slice(1); //Capitalizes first letter of string

    console.log(capitalizeFirst);
    return capitalizeFirst;
}

let playerChoice = playerCapitalizeFirst();

function playRound(playerSelection, computerSelection) {
    playerSelection = playerChoice;
    computerSelection = getComputerChoice();

    console.log(typeof(playerSelection));

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

function playGame() {

    console.log(playerInput);
    getComputerChoice();
    console.log(playRound());

    console.log(playerInput);
    getComputerChoice();
    console.log(playRound());

    console.log(playerInput);
    getComputerChoice();
    console.log(playRound());
    
    console.log(playerInput);
    getComputerChoice();
    console.log(playRound());
    
    console.log(playerInput);
    getComputerChoice();
    console.log(playRound());
}

playGame();