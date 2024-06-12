let humanWs = 0;
let computerWs = 0;
let ties = 0;
let color = 0;
const results = document.querySelector(".results");
const error = document.querySelector(".error");
const reset = document.querySelector(".reset");

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
        color = 0;
        return "Tie!";
    }
    else if ((h === 'rock' && c === 'scissors') || (h === 'scissors' && c === 'paper') ||
        (h === 'paper' && c === 'rock')) {
        humanWs++;
        color = 1;
        return "You win!";
     }
    else {
        computerWs++;
        color = -1;
         return "Computer win!";
    }
}  


const game = document.querySelectorAll(".btn");
game.forEach(function(btns) {
    btns.addEventListener("click", function() {
        if(humanWs === 5 || computerWs === 5) {
            let winner = humanWs > computerWs ? "You win the game!" : "Computer wins the game!";
            const winResults = document.createElement("p");
            winResults.textContent = winner;
            results.appendChild(winResults);
            error.textContent = "Cannot play more! Reset the game!";
            game.forEach(element => {
                element.disabled = true;
            });
        }
        else {
            let human = btns.textContent.toLowerCase();
            let comp = getComputerChoice();
            const content = document.createElement("p");
            content.textContent = rps(human, comp);
            results.appendChild(content);
            content.setAttribute("style", "margin:0;")
            if (color === 1)
                content.style.color = "green";
            else if (color === -1) 
                content.style.color = "red";
            else
            content.style.color = "yellow";
         }
    });
});

reset.addEventListener("click", function () {
    humanWs = 0;
    computerWs = 0;
    results.textContent = "";
    error.textContent = "";
    game.forEach(element => {
        element.disabled = false;
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
