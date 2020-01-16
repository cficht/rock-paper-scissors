export function getRandomThrow() {
    const numberGenerator = Math.round(Math.random() * 2);

    if (numberGenerator === 0) {
        return 'rock';
    } else if (numberGenerator === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }

}

export function checkResult(player, computer) {

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