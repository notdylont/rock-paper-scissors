let humanWs = 0;
let computerWs = 0;
let ties = 0;
const results = document.querySelector("#results");

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
    while(humanWs != 5 || computerWs!= 5) {
        if (h === c ) {
            ties++;
            return 0;
        }
        else if ((h === 'rock' && c === 'scissors') || (h === 'scissors' && c === 'paper') ||
            (h === 'paper' && c === 'rock')) {
            humanWs++;
            return 1;
        }
        else {
            computerWs++;
            return -1;
        }
    }
}   

const playRound = () => {
    humanWs = 0;
    computerWs = 0;
    let comp = getComputerChoice();
    console.log('Human: ' + human);
    console.log('Computer: ' + comp);
    console.log(rps(human, comp));
}

const game = document.querySelectorAll(".btn");
game.forEach(function(btns) {
    btns.addEventListener("click", function() {
        let human = btns.textContent.toLowerCase();
        let comp = getComputerChoice();
        console.log(rps(human, comp));
    });
});

/*
const getHumanChoice = () => {
    return prompt("Choose rock, paper or scissors!").toLowerCase();
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
