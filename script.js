const choices = ["rock", "paper", "scissors"]; //Create list of choices

function getComputerChoice() {
    let numberChoice = Math.floor(Math.random() * 3); //Generates random number between 0 and 2
    console.log(numberChoice);

    let computerChoice = choices[numberChoice];
    console.log(computerChoice);
}

getComputerChoice();
getComputerChoice();
getComputerChoice();
getComputerChoice();
getComputerChoice();