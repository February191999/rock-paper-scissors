const choices = ["Rock", "Paper", "Scissors"]; //Create list of choices

function getNumberChoice() {
    let numberChoice = Math.floor(Math.random() * 3); //Generates random number between 0 and 2
    return numberChoice;
}

function getComputerChoice() {
    let computerChoice = choices[getNumberChoice()]; //Index into random number generated from numberChoice

    return computerChoice;
}

let playerScore = 0;
let computerScore = 0;
let resultValue = '';

function playRound(playerSelection, computerSelection) {

    playerSelection = playerChoice;
    computerSelection = getComputerChoice();
        
    if (playerSelection === computerSelection) {
        resultValue = `Result: Tied! You chose ${playerSelection} against your opponent's ${computerSelection}! Player Score: ${playerScore} Computer Score: ${computerScore}`;
        outputPara.textContent = resultValue;
        listItem.appendChild(outputPara);  
        output.appendChild(listItem);
    } else if (
        playerSelection === "Rock" && computerSelection === "Scissors" || 
        playerSelection === "Scissors" && computerSelection === "Paper" || 
        playerSelection === "Paper" && computerSelection === "Rock"
    ) {
        ++playerScore;
        outputPara.textContent = `Result: You won! You chose ${playerSelection} against your opponent's ${computerSelection}! Player Score: ${playerScore} Computer Score: ${computerScore}`;
        // listItem.appendChild(outputPara);
    } else {
        ++computerScore;
        console.log(computerScore);
        outputPara.textContent = `Result: You lost! You chose ${playerSelection} against your opponent's ${computerSelection}! Player Score: ${playerScore} Computer Score: ${computerScore}`;
        // listItem.appendChild(outputPara);
    }
}

function checkGameOver() {
    if (playerScore === 5) {
        outputPara.textContent = `Congratulations! You won! Player Score: ${playerScore} Computer Score: ${computerScore}`;
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        outputPara.textContent = `Game Over! You lost! Player Score: ${playerScore} Computer Score: ${computerScore}`;
        playerScore = 0;
        computerScore = 0;
    }
}

const body = document.querySelector("body");
const uiDiv = document.createElement("div");
const playerSelectionDiv = document.createElement("div");
const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");
const output = document.createElement("ul");
const outputPara = document.createElement("span");
const listItem = document.createElement("li");
let playerChoice = "";

body.setAttribute("style", "display: flex; justify-content: space-around;")

uiDiv.classList.add("ui-div");
uiDiv.setAttribute("style", "display: flex; height: 50%; width: 50%; flex-direction: column; border: 5px solid black;")

playerSelectionDiv.setAttribute("style", "display: flex; justify-content: space-between; padding-left: 30%; padding-right: 30%; padding-top: 10px; margin: 0;");

output.setAttribute("style", "list-style-type: none;");

outputPara.textContent = "Result: ";
outputPara.setAttribute("style", "font-weight: bold; padding-left: 10%;");

rockButton.textContent = "Rock";
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
    playerChoice = rockButton.value;
    playRound();
    checkGameOver();
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
    playerChoice = paperButton.value;
    playRound();
    checkGameOver();
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
    playerChoice = scissorsButton.value;
    playRound();
    checkGameOver();
})

body.appendChild(uiDiv);
playerSelectionDiv.appendChild(rockButton);
playerSelectionDiv.appendChild(paperButton);
playerSelectionDiv.appendChild(scissorsButton);
uiDiv.appendChild(playerSelectionDiv);
output.appendChild(listItem);
listItem.appendChild(outputPara);
uiDiv.appendChild(output);