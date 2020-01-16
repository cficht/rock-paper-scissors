import { getRandomThrow, checkResult } from './get-random-throw.js';

const playButton = document.getElementById('play-button');
const winText = document.getElementById('win-text');
const loseText = document.getElementById('lose-text');
const drawText = document.getElementById('draw-text');
const currentGameText = document.getElementById('current-game-text');
const computerChoiceText = document.getElementById('computer-choice-text');

let winCount = 0;
let loseCount = 0;
let drawCount = 0;

playButton.addEventListener('click', () => {

    let computerThrow = getRandomThrow();
    let userThrow = document.querySelector('input:checked').value;
    
    // console.log('COMPUTER ' + computerThrow);
    // console.log('USER ' + userThrow);

    let currentResult = checkResult(userThrow, computerThrow);

    // console.log(currentResult);

    if (currentResult === 'win') {
        winCount++;
        currentGameText.textContent = 'YOU WIN';
    } else if (currentResult === 'lose') {
        loseCount++;
        currentGameText.textContent = 'YOU LOSE';
    } else if (currentResult === 'draw') {
        drawCount++;
        currentGameText.textContent = 'YOU DRAW';
    }

    computerChoiceText.textContent = `The computer chose ${computerThrow}`;

    winText.textContent = winCount;
    loseText.textContent = loseCount;
    drawText.textContent = drawCount;

});

