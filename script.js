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

let playerInput = '';

let playerChoice = playerInput;

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

const body = document.querySelector("body");
const uiDiv = document.createElement("div");
const playerSelectionDiv = document.createElement("div");
const startButton = document.createElement("button");
const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");

body.setAttribute("style", "display: flex; justify-content: space-around;")

uiDiv.classList.add("ui-div");
uiDiv.setAttribute("style", "display: flex; height: 50%; width: 50%; flex-direction: column; border: 5px solid black;")

startButton.classList.add("start-button");
startButton.textContent = "Start Game";
startButton.setAttribute("style", "font-weight: bold; width: 250px; align-self: center;")

playerSelectionDiv.setAttribute("style", "display: flex; justify-content: space-between; padding-left: 30%; padding-right: 30%; margin: 0;");

rockButton.textContent = "Rock";
rockButton.addEventListener("mouseover", () => {
    rockButton.style.backgroundColor = "red";
    rockButton.style.color = "white";
});
rockButton.addEventListener("mouseout", () => {
    rockButton.style.backgroundColor = "";
    rockButton.style.color = "black";
});
rockButton.addEventListener("click", () => {

})

paperButton.textContent = "Paper";
paperButton.addEventListener("mouseover", () => {
    paperButton.style.backgroundColor = "blue";
    paperButton.style.color = "white";
});
paperButton.addEventListener("mouseout", () => {
    paperButton.style.backgroundColor = "";
    paperButton.style.color = "black";
});
paperButton.addEventListener("click", () => {

})

scissorsButton.textContent = "Scissors";
scissorsButton.addEventListener("mouseover", () => {
    scissorsButton.style.backgroundColor = "green";
    scissorsButton.style.color = "white";
});
scissorsButton.addEventListener("mouseout", () => {
    scissorsButton.style.backgroundColor = "";
    scissorsButton.style.color = "black";
});
scissorsButton.addEventListener("click", () => {

})

uiDiv.appendChild(startButton);
body.appendChild(uiDiv);
playerSelectionDiv.appendChild(rockButton);
playerSelectionDiv.appendChild(paperButton);
playerSelectionDiv.appendChild(scissorsButton);
uiDiv.appendChild(playerSelectionDiv);
