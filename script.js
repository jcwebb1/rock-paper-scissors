const choices = ["rock","paper","scissors"]

//to get the computer to return a random choice
//Math.floor rounds down to nearest decimal
function getComputerChoice() {
    return choices[Math.floor(Math.random()* choices.length)]
}