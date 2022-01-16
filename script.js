let playerScore = 0;
let computerScore = 0;
let computerHand;
let playerHand;
const boxes = document.querySelectorAll(".box");
const statusBox = document.querySelector(".status");
const playerScoreBox = document.querySelector(".player-score");
const computerScoreBox = document.querySelector(".computer-score");
const playerSelection = document.querySelector(".player-selection > img");
const computerSelection = document.querySelector(".computer-selection > img");
const playerBox = document.querySelector(".player-selection")
const computerBox = document.querySelector(".computer-selection")
const images = document.querySelectorAll("img");
const subtitle = document.querySelector(".subtitle")
const btn = document.createElement("button");
const div = document.createElement("div");
btn.innerHTML = "Restart the game";
btn.classList.add("button");
btn.setAttribute("onClick", "window.location.reload();");
const footer = document.querySelector(".footer");
const body = document.querySelector("body");
playerScoreBox.textContent = "0";
computerScoreBox.textContent = "0";

function computerPlay() {
    computerHand = Math.floor(Math.random() * 3);
    switch (computerHand) {
        case 0:
            return computerHand= "rock";
            break;
    
        case 1:
            return computerHand= "paper";
            break;

        case 2:
            return computerHand= "scissors";
            break;

        default:
            break;
    }
}

function updateStatus(){
    if (playerScore == 5) {
        statusBox.textContent = "You Win! World Is Saved!";
    } else if (computerScore == 5) {
        statusBox.textContent = "Machines Won, All Is Lost :(";
    } else {

    }
}

function endGame(){
    images.forEach(image => image.remove());
    boxes.forEach(box => box.remove());
    playerBox.remove();
    computerBox.remove();
    subtitle.remove();
    body.insertBefore(div, footer);
    div.appendChild(btn);
    boxes.forEach(box => box.classList.remove("clickable"));
    boxes.forEach(box => box.removeEventListener("click", updateStatus()));
}


function checkRoundWinner(playerHand, computerHand){
    if (playerHand == computerHand) {
        statusBox.textContent = "It's a tie";
    } else if (playerHand == "rock" && computerHand == "paper") {
        computerScore++;
        computerScoreBox.textContent = computerScore;
        statusBox.textContent = "Paper  beats rock! You Lose :(";
    } else if (playerHand == "rock" && computerHand == "scissors") {
        playerScore++;
        playerScoreBox.textContent = playerScore;
        statusBox.textContent = "Rock beats Scissors! You Win!";
    } else if (playerHand == "paper" && computerHand == "rock") {
        playerScore++;
        playerScoreBox.textContent = playerScore;
        statusBox.textContent = "Paper  beats rock! You Win!";
    } else if (playerHand == "paper" && computerHand == "scissors") {
        computerScore++;
        computerScoreBox.textContent = computerScore;
        statusBox.textContent = "Scissors beats paper! You Lose :(";
    } else if (playerHand == "scissors" && computerHand == "paper") {
        playerScore++;
        playerScoreBox.textContent = playerScore;
        statusBox.textContent = "Scissors beats paper! You Win!";
    } else if (playerHand == "scissors" && computerHand == "rock") {
        computerScore++;
        computerScoreBox.textContent = computerScore;
        statusBox.textContent = "Rock beats scissors! You Lose :("
    } else {
        return "Something went wrong. Please refresh the page.";
    }
    if (playerScore == 5 || computerScore == 5) {
        endGame();
    }
}

function playRound(){
    if (playerScore == 5 || computerScore == 5) {
        endGame();
    } else {
        checkRoundWinner(playerHand, computerHand);
    }
}


boxes.forEach(box => box.addEventListener("click", function(e){
        playerHand = this.classList[0];
        computerPlay();
        console.log(playerSelection.src)
        playerSelection.src = this.lastChild.src;
        computerSelection.src = "./images/" + computerHand + ".png";
        console.log(computerSelection.src);
        playRound();
}));
