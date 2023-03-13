function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if(choice === 1) choice = "rock";
    else if(choice === 2) choice = "scissors";
    else choice = "paper";

    return choice;
}

function playRound(playerSelection, computerSelection) {
    if( (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock") ) {
            score += 1;
            return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
}

function game(round) {
    let i = 0;
    while(i < round){
        // Get User's input
        do{
            playerSelection = prompt("What is your choice?").toLowerCase();
        }
        while(!validInput(playerSelection));
        // Get Computer's selection
        let computerSelection = getComputerChoice();
        if(playerSelection === computerSelection){
            continue;
        }
        // Playing Round
        console.log(playRound(playerSelection, computerSelection));
        i += 1;

    }
}

function validInput(choice){
    if(choice === "rock")  return true;
    else if(choice === "scissors") return true;
    else if(choice === "paper") return true;
    alert("Please choose one of 'Rock', 'Scissors' and 'Paper'.");
    return false;
}

let score = 0;
alert("Let's Play Rock, Scissors, Paper!");
game(5);
alert(`Your Score is ${score}.`);
