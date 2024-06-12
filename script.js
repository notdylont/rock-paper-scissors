let humanWs = 0;
let computerWs = 0;
let ties = 0;
const results = document.querySelector(".results");
const error = document.querySelector(".error");
const reset = docuement.querySelector(".reset");

const getComputerChoice = () => {
    let x = Math.random();
    let result = '';
    if (x >= 0.67)
        result = 'rock';
    else if (x >= 0.33 && x < 0.67)
        result = 'paper';
    else
        result = 'scissors';
    return result
};

const rps = (h, c) => {
     if (h === c ) {
        ties++;
        return "Tie!";
    }
    else if ((h === 'rock' && c === 'scissors') || (h === 'scissors' && c === 'paper') ||
        (h === 'paper' && c === 'rock')) {
        humanWs++;
        return "Human win!";
     }
    else {
        computerWs++;
         return "Computer win!";
    }
}  


const game = document.querySelectorAll(".btn");
game.forEach(function(btns) {
    btns.addEventListener("click", function() {
        if(humanWs === 5 || computerWs === 5) {
            let winner = humanWs > computerWs ? "Human wins the game!" : "Computer Wins the game!";
            const winResults = document.createElement("p");
            winResults.textContent = winner;
            results.appendChild(winResults);
            error.textContent = "Cannot play more! Reset the game!";
        }
        else {
            let human = btns.textContent.toLowerCase();
            let comp = getComputerChoice();
            console.log('Human: ' + human + " " + humanWs);
            console.log('Computer: ' + comp + " " + computerWs);
            const content = document.createElement("p");
            content.textContent = rps(human, comp);
            results.appendChild(content);
        }
    });
});

/*
const getHumanChoice = () => {
    return prompt("Choose rock, paper or scissors!").toLowerCase();
}

const playRound = () => {
    humanWs = 0;
    computerWs = 0;
    let comp = getComputerChoice();
    console.log('Human: ' + human);
    console.log('Computer: ' + comp);
    console.log(rps(human, comp));
}


let playGame = () => {
    humanWs = 0;
    computerWs = 0;
    for (let i = 1 ; i <= 5 ; i++) {
        console.log(`Game ${i}!`);
        playRound();
        console.log('\n');
    }
    console.log(`The results are: \nHuman: ${humanWs} \nComputer: ${computerWs} \nTies: ${ties}`);
}
playGame();
*/
