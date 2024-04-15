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

