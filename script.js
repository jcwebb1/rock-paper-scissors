const choices = ["rock","paper","scissors"]


function getPlayerChoice() {
    let input = prompt("Type Rock, Paper, or Scissors");
    while (input == null) {
        input = prompt("Type Rock, Paper, or Scissors")
    }
    input = input.toLowerCase();
    console.log(input)
}

//to get the computer to return a random choice
//Math.floor rounds down to nearest decimal
function getComputerChoice() {
    return choices[Math.floor(Math.random()* choices.length)]
}