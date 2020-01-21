export function getRandomThrow() {
    
    // generates random number between 0 and 2
    const numberGenerator = Math.floor(Math.random() * 3); 

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
    if (player === computer) { 
        return 'draw';
    } else if ((player === 'paper' && computer === 'rock') || (player === 'rock' && computer === 'scissors') || (player === 'scissors' && computer === 'paper')) {
        return 'win';
    } else {
        return 'lose';
    }

}