let humanWs = 0;
let computerWs = 0;
let ties = 0;
let color = 0;
const results = document.querySelector(".results");
const error = document.querySelector(".error");
const reset = document.querySelector(".reset");
const score = document.querySelector(".score");

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

const checkScore = () => {
    if(humanWs === 5 || computerWs === 5) {
        let winner = humanWs > computerWs ? "You win the game!" : "Computer wins the game!";
        const winResults = document.createElement("p");
        winResults.textContent = winner;
        results.appendChild(winResults);
        error.textContent = "Cannot play more! Reset the game!";
        game.forEach(element => {
        element.disabled = true;
        });
        return true;
    }
};


const game = document.querySelectorAll(".btn");
game.forEach(function(btns) {
    btns.addEventListener("click", function() {
        let human = btns.textContent.toLowerCase();
        let comp = getComputerChoice();
        const content = document.createElement("p");
        content.textContent = rps(human, comp);
        score.textContent = `You: ${humanWs}     Computer: ${computerWs}`
        results.appendChild(content);
        content.setAttribute("style", "margin:0;")
        if (color === 1)
            content.style.color = "green";
        else if (color === -1) 
            content.style.color = "red";
        else
            content.style.color = "yellow";
        
        checkScore();
    });
});

reset.addEventListener("click", function () {
    humanWs = 0;
    computerWs = 0;
    score.textContent = `You: ${humanWs}     Computer: ${computerWs}`
    results.textContent = "";
    error.textContent = "";
    game.forEach(element => {
        element.disabled = false;
    });
});

