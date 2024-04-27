const choices = ["Rock", "Paper", "Scissors"]; //Create list of choices

function getNumberChoice() {
    let numberChoice = Math.floor(Math.random() * 3); //Generates random number between 0 and 2
    return numberChoice;
}

function getComputerChoice() {
    let computerChoice = choices[getNumberChoice()]; //Index into random number generated from numberChoice

    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerChoice;
    computerSelection = getComputerChoice();

    console.log(rockButton.value);
    console.log(playerSelection);
    console.log(computerSelection);

    console.log(typeof(playerSelection));

    if (playerSelection === computerSelection) {
        return outputPara.textContent = `Result: Tied! You chose ${playerSelection} against your opponent's ${computerSelection}!`;  
    } else if (
        playerSelection === "Rock" && computerSelection === "Scissors" || 
        playerSelection === "Scissors" && computerSelection === "Paper" || 
        playerSelection === "Paper" && computerSelection === "Rock"
        ) {
            return outputPara.textContent = `Result: You won! You chose ${playerSelection} against your opponent's ${computerSelection}!`;
    } else if (playerSelection === "") {
        return outputPara.textContent = "Result: Please enter your choice!";
    } else {
        return outputPara.textContent = `Result: You lost! You chose ${playerSelection} against your opponent's ${computerSelection}!`;
    }
}

const body = document.querySelector("body");
const uiDiv = document.createElement("div");
const playerSelectionDiv = document.createElement("div");
const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");
const output = document.createElement("div");
const outputPara = document.createElement("p");
const results = outputPara.value;
const rockButtonClass = document.querySelector("rock-button");
let playerChoice = "";

body.setAttribute("style", "display: flex; justify-content: space-around;")

uiDiv.classList.add("ui-div");
uiDiv.setAttribute("style", "display: flex; height: 50%; width: 50%; flex-direction: column; border: 5px solid black;")

playerSelectionDiv.setAttribute("style", "display: flex; justify-content: space-between; padding-left: 30%; padding-right: 30%; padding-top: 10px; margin: 0;");

outputPara.textContent = "Result: ";
outputPara.setAttribute("style", "font-weight: bold; padding-left: 10%;")

rockButton.textContent = "Rock";
rockButton.classList.add("rock-button");
rockButton.value = "Rock";
rockButton.addEventListener("mouseover", () => {
    rockButton.style.backgroundColor = "red";
    rockButton.style.color = "white";
});
rockButton.addEventListener("mouseout", () => {
    rockButton.style.backgroundColor = "";
    rockButton.style.color = "black";
});
rockButton.addEventListener("click", () => {
    console.log(rockButton.value);
    playerChoice = rockButton.value;
    console.log(playerChoice);
    console.log(playRound());
    
});

paperButton.textContent = "Paper";
paperButton.value = "Paper";
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
scissorsButton.value = "Scissors";
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

body.appendChild(uiDiv);
playerSelectionDiv.appendChild(rockButton);
playerSelectionDiv.appendChild(paperButton);
playerSelectionDiv.appendChild(scissorsButton);
uiDiv.appendChild(playerSelectionDiv);
output.appendChild(outputPara);
uiDiv.appendChild(output);