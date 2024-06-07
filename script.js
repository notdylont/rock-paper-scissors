let humanWs = 0;
let computerWs = 0;

let getComputerChoice = () => {
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

let getHumanChoice = () => {
    return prompt("Choose rock, paper or scissors!").toLowerCase();
}

let rps = (h, c) => {
    let rpsArray = ['rock', 'paper', 'scissors']
    if (rpsArray.includes(h)){
        if (h === 'rock' && c === 'scissors'){
            humanWs++;
            return 'Human wins!';
        }
        else if(h === 'scissors' && c === 'paper') {
            humanWs++;
            return 'Human wins!';
        }
        else if(h === 'paper' && c === 'rock') {
            humanWs++;
            return 'Human Wins!';
        }
        else if (h === c )
            return "It's a tie!";
        else {
            computerWs++;
            return 'Computer Wins!';
        }
    }
    else {
        return 'Please choose rock, paper, or scissors!';
    }
        
}

let playRound = () => {
    let comp = getComputerChoice();
    let human = getHumanChoice();
    console.log(rps(human, comp));
}

let playGame = () => {
    humanWs = 0;
    computerWs = 0;
    for (let i = 0 ; i < 5 ; i++) {
        console.log(`Game ${i}!`);
        playRound();
    }
    console.log(`The results are: \nHuman: ${humanWs} \nComputer: ${computerWs}`);
}

playGame();
