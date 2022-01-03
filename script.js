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

function rockPaperScissors (playerSelection, computerSelection){
    console.log("rockPaperScissors function is called");
    console.log("Computer selection is " + computerSelection + " and player selection is " + playerSelection);
    if (computerSelection == "ROCK" && playerSelection.toUpperCase() == "ROCK"){
        alert("Rock vs Rock! It's a tie!") ;
    } else if (computerSelection == "ROCK" && playerSelection.toUpperCase() == "PAPER") {
        PlayerWin++;
        alert("Paper beats Rock! You Win!");
    } else if (computerSelection == "ROCK" && playerSelection.toUpperCase() == "SCISSORS") {
        ComputerWin++;
        alert("Rock beats Scissors! You Lose!");
    } else if (computerSelection == "PAPER" && playerSelection.toUpperCase() == "ROCK") {
        ComputerWin++;
        alert("Paper beats Rock! You Lose!");
    } else if (computerSelection == "PAPER" && playerSelection.toUpperCase() == "PAPER") {
        alert("Paper vs Paper! It's a tie!");
    } else if (computerSelection == "PAPER" && playerSelection.toUpperCase() == "SCISSORS") {
        PlayerWin++;
        alert("Scissors beats Paper! You Win!");
    } else if (computerSelection == "SCISSORS" && playerSelection.toUpperCase() == "SCISSORS") {
        alert("Scissors vs Scissors! It's a tie!");
    } else if (computerSelection == "SCISSORS" && playerSelection.toUpperCase() == "PAPER") {
        ComputerWin++;
        alert("Scissors beats Paper! You Lose!");
    } else if (computerSelection == "SCISSORS" && playerSelection.toUpperCase() == "ROCK") {
        PlayerWin++;
        alert("Rock beats Scissors! You Win!");
    } else {
        alert("Something went wrong with rockPaperScissors function. Please refresh the page.");
    }
}


function game(){
    console.log("game function is called.")
    for (let index = 0; index <= 5; index++) {
        console.log("You are inside for loop.")
        computerSelection = computerPlay();
        console.log("Computer selection is " + computerSelection);
        playerSelection = prompt("Rock, Paper or Scissors?");
        console.log("Player selection is " + playerSelection);
        if (playerSelection.toUpperCase() == "ROCK" || playerSelection.toUpperCase() == "PAPER" || playerSelection.toUpperCase() == "SCISSORS"){
            rockPaperScissors(playerSelection, computerSelection);
            console.log("Computer selection is " + computerSelection + " and player selection is " + playerSelection);
        } else {
            console.log("Computer selection is " + computerSelection + " and player selection is " + playerSelection);
            alert("You should input \"Rock\", \"Paper\" or \"Scissors\".");
        }
    }

    alert("Computer won " +  ComputerWin + " times and you won " + PlayerWin + " times.")

}

game();