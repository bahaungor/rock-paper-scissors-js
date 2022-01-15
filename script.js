let PlayerWin = 0;
let ComputerWin = 0;
let playerSelection;

function computerPlay() {
    let computerchoice = Math.floor(Math.random() * 3)
    switch (computerchoice % 3){
        case 0:
            return "ROCK";
            break;
        
        case 1:
            return "PAPER";
            break;

        case 2:
            return "SCISSORS";
            break;

        default:
            return "Something went wrong with computerPlay function. Please refresh the page."
    }
}

function decideWinner (playerSelection, computerSelection){
    if (computerSelection == "ROCK" && playerSelection.toUpperCase() == "ROCK"){
        return "Rock vs Rock! It's a tie!";
    } else if (computerSelection == "ROCK" && playerSelection.toUpperCase() == "PAPER") {
        PlayerWin++;
        return "Paper beats Rock! You Win!";
    } else if (computerSelection == "ROCK" && playerSelection.toUpperCase() == "SCISSORS") {
        ComputerWin++;
        return "Rock beats Scissors! You Lose!";
    } else if (computerSelection == "PAPER" && playerSelection.toUpperCase() == "ROCK") {
        ComputerWin++;
        return "Paper beats Rock! You Lose!";
    } else if (computerSelection == "PAPER" && playerSelection.toUpperCase() == "PAPER") {
        return "Paper vs Paper! It's a tie!";
    } else if (computerSelection == "PAPER" && playerSelection.toUpperCase() == "SCISSORS") {
        PlayerWin++;
        return "Scissors beats Paper! You Win!";
    } else if (computerSelection == "SCISSORS" && playerSelection.toUpperCase() == "SCISSORS") {
        return "Scissors vs Scissors! It's a tie!";
    } else if (computerSelection == "SCISSORS" && playerSelection.toUpperCase() == "PAPER") {
        ComputerWin++;
        return "Scissors beats Paper! You Lose!";
    } else if (computerSelection == "SCISSORS" && playerSelection.toUpperCase() == "ROCK") {
        PlayerWin++;
        return "Rock beats Scissors! You Win!";
    } else {
        return "Something went wrong with rockPaperScissors function. Please refresh the page.";
    }
}
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const boxes = document.querySelectorAll(".box")
const computerScore = document.querySelector(".computer-score");
const playerScore = document.querySelector(".player-score");
const statusBox = document.querySelector(".status");

computerScore.textContent = ComputerWin;
playerScore.textContent = PlayerWin;
let computerSelection;

function endGame(){
    console.log("this loop is entered")
    boxes.forEach(box => box.removeEventListener("click", () => {
        if (ComputerWin == 5 ) statusBox.textContent = "Computers win :(";
        if (PlayerWin == 5 ) statusBox.textContent = "You win :)";
    }) );
} 

boxes.forEach(box => box.addEventListener ("click", function() {
    computerSelection = computerPlay();
    statusBox.textContent = decideWinner(this.classList[0], computerPlay());
    computerScore.textContent = ComputerWin;
    playerScore.textContent = PlayerWin;
    console.log("computer win is " + ComputerWin)
    console.log("player win is " + PlayerWin)
    if (ComputerWin == 5 || PlayerWin == 5) endGame(); 
}))



