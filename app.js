const cardStuff = document.querySelectorAll(".cardStuff");
const score = document.querySelectorAll(".score");

let playerGuess = cardStuff.textContent;
console.log(playerGuess);

function eventListenars(){
    cardStuff.addEventListenar("click",playerSelection)
}

function playerSelection(){
    
}

function getComputerChoice(){
    const randomChoice = Math.floor(Math.random() *3) + 1;
    let computerGuess = '';
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
    return computerGuess;
}