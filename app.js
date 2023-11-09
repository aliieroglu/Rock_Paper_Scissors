const allCard = document.querySelector(".card");
const cardStuff = document.querySelectorAll(".cardStuff");
const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");
const playerText = document.querySelector(".player");
const computerText = document.querySelector(".computer");
const resultText = document.querySelector(".result");
let playerGuess;
let computerGuess;


let playerScr = 0;
let computerScr = 0;

cardStuff.forEach(choice => {
    choice.addEventListener('click', () => {
        playerGuess = choice.textContent;
        getComputerChoice();
        playerText.textContent = `Player: ${playerGuess}`;
        computerText.textContent = `Computer: ${computerGuess}`;
        resultText.textContent = "Result: " + playRound(playerGuess,computerGuess); 
        playerScore.textContent = playerScr;
        computerScore.textContent = computerScr;
    });
});

function playRound(playerGuess, computerGuess){
    if(playerGuess == computerGuess){
        return "It's a Draw";
    }
    else if(playerGuess == 'Rock'){
        if(computerGuess == 'Scissors'){
            playerScr++;
            return "You win";
        }else{
            computerScr++;
            return "You lose";
        }
    }
    else if(playerGuess == 'Paper'){
        if(computerGuess == 'Rock'){
            playerScr++;
            return "You win";
        }else{
            computerScr++;
            return "You lose";
        }
    }
    else if(playerGuess == 'Scissors'){
        if(computerGuess == 'Paper'){
            playerScr++;
            return "You win";
        }else{
            computerScr++;
            return "You lose";
        }
    }
}


function getComputerChoice(){
    const randomChoice = Math.floor(Math.random() *3) + 1;
    switch(randomChoice){
        case 1:
            computerGuess = 'Rock';
            break;
        case 2:
            computerGuess = 'Paper';
            break;
        case 3:
            computerGuess = 'Scissors';
            break;
        default:
            break; 
    }
}