const choices = ["Rock", "Paper", "Scissors"]; //Create list of choices

function getNumberChoice() {
    let numberChoice = Math.floor(Math.random() * 3); //Generates random number between 0 and 2
    return numberChoice;
}

function getComputerChoice() {
    let computerChoice = choices[getNumberChoice()]; //Index into random number generated from numberChoice
    console.log(computerChoice);
}

getComputerChoice();
getComputerChoice();
getComputerChoice();
getComputerChoice();
getComputerChoice();

let playerInput = window.prompt("What will you play?", '');

console.log(playerInput);

function playerLower() {
    let choiceLower = playerInput.toLowerCase(); //Converts input to lower case

    return choiceLower;
}

function playerCapitalizeFirst() {


    let capitalizeFirst = playerLower()[0].toUpperCase() + playerLower().slice(1);

    console.log(capitalizeFirst);
}

let playerChoice = playerCapitalizeFirst();

// console.log(playerChoice())

// function playRound(playerSelection, computerSelection) {
//     let playerSelection = playerChoice();
//     let computerSelection = getComputerChoice();

//     if playerSelection === ''
// }