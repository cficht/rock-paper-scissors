export function getRandomThrow() {
    
    // generates random number between 0 and 2
    const numberGenerator = Math.round(Math.random() * 2); 

    // decides is the computer is rock, paper or scissors based off the random number
    if (numberGenerator === 0) {
        return 'rock';
    } else if (numberGenerator === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }

}

export function checkResult(player, computer) {

    // checks the possible user and computer scenarios to decide if the user wins, loses or draws
    if (player === 'paper' && computer === 'rock') {
        return 'win';
    } else if (player === 'rock' && computer === 'scissors') {
        return 'win';
    } else if (player === 'scissors' && computer === 'paper') {
        return 'win';
    } else if (computer === 'paper' && player === 'rock') {
        return 'lose';
    } else if (computer === 'rock' && player === 'scissors') {
        return 'lose';
    } else if (computer === 'scissors' && player === 'paper') {
        return 'lose';
    } else {
        return 'draw';
    }

}