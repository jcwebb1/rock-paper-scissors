const options = ["rock","paper","scissors"]







////////////////////////////////
function game() {
    console.log("Welcome!")
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
    console.log("game over")
}
game()

function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if(result == "Tie") {
        return "You Tied"
    }
    else if(result == "Player") {
        return `You win! ${playerSelection} beats ${computerSelection}`
    }
    else {
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }
}


function getPlayerChoice() {
    let validInput = false;
    while(validInput == false) {
        const choice = prompt("Rock, Paper, or Scissors");
        if(choice == null) {
            continue;
        }
    }
    const choiceInLower = choice.toLowerCase();
    if(options.includes(choiceInLower)){
        validInput = true;
        return choiceInLower
    }
}

//to get the computer to return a random choice
//Math.floor rounds down to nearest decimal
function getComputerChoice() {
    const choice = options[Math.floor(Math.random()* options.length)]
    return choice;
}
getComputerChoice();

function checkWinner(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
        return 'Tie';
    } else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")
    ) {
        return "Player";
    } else {
        return "Computer";
    }
}
checkWinner()