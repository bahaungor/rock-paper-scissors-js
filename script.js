const selections = document.querySelectorAll(".selectable");
const selection = document.querySelector(".selection");
const userChoice = document.querySelector(".user-choice");
const pcChoice = document.querySelector(".pc-choice");
const userScore = document.querySelector(".user-choice-container span")
const pcScore = document.querySelector(".pc-choice-container span")
const main = document.querySelector(".main")

let playerScore=0;
let computerScore=0;
let round = 0;

selections.forEach(selection => selection.addEventListener("click", playRound))

function playRound(e){
    round++;
    let playerSelection = this.dataset.select;
    userChoice.src = `./images/${playerSelection}.png`
    let computerSelection = getComputerChoice ();
    pcChoice.src = `./images/${computerSelection}.png`
    if (playerSelection == computerSelection) {
        selection.textContent = 'It\'s a tie! Try one more round!';
    } else if (
        (playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissors' && computerSelection == 'paper')
    ) {
        selection.textContent = `You win! ${playerSelection} beats ${computerSelection}`,'user';
        playerScore++;
        userScore.textContent = playerScore;
    } else {
        selection.textContent = `You lose! ${computerSelection} beats ${playerSelection}`,'computer';
        computerScore++;
        pcScore.textContent = computerScore;
    }

    if ((round > 7) && (playerScore!=computerScore)) {
        main.innerHTML = "";
        const p = document.createElement('p');
        p.classList.add("game-over")
        const btn = document.createElement('button');
        btn.innerHTML = 'Restart The Game';
        btn.addEventListener('click', () => location.reload())
        main.appendChild(p)
        if(playerScore > computerScore){
            p.textContent = `GAME OVER! Your score is ${playerScore}, PC score is ${computerScore}. You win!`
        } else {
            p.textContent = `GAME OVER! Your score is ${playerScore}, PC score is ${computerScore}. You lose!`
        }
        main.appendChild(btn)
    }
}

function getComputerChoice (){
    let rand_num = Math.floor(Math.random() * 3);
    let choice = (rand_num == 0) ? 'rock' : (rand_num == 1) ? 'paper' : 'scissors';
    return choice;
}