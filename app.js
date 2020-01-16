import { getRandomThrow, checkResult } from './get-random-throw.js';

const playButton = document.getElementById('play-button');
const winText = document.getElementById('win-text');
const loseText = document.getElementById('lose-text');
const drawText = document.getElementById('draw-text');
const currentGameText = document.getElementById('current-game-text');
const computerChoiceText = document.getElementById('computer-choice-text');
const resetButton = document.getElementById('reset-button');

let winCount = 0;
let loseCount = 0;
let drawCount = 0;

currentGameText.style.visibility = 'hidden';
computerChoiceText.style.visibility = 'hidden';

playButton.addEventListener('click', () => {

    currentGameText.style.visibility = 'visible';
    computerChoiceText.style.visibility = 'visible';
    winText.style.color = '#69D2E7';
    loseText.style.color = '#69D2E7';
    drawText.style.color = '#69D2E7';

    let computerThrow = getRandomThrow();
    let userThrow = document.querySelector('input:checked').value;
    
    // console.log('COMPUTER ' + computerThrow);
    // console.log('USER ' + userThrow);

    let currentResult = checkResult(userThrow, computerThrow);

    // console.log(currentResult);

    if (currentResult === 'win') {
        winCount++;
        currentGameText.textContent = 'YOU WIN!!';
        winText.style.color = 'yellow';
        currentGameText.style.color = 'yellow';
    } else if (currentResult === 'lose') {
        loseCount++;
        currentGameText.textContent = 'YOU LOSE!!!';
        loseText.style.color = 'red';
        currentGameText.style.color = 'red';
    } else if (currentResult === 'draw') {
        drawCount++;
        currentGameText.textContent = 'DRAW!!!';
        drawText.style.color = 'black';
        currentGameText.style.color = 'black';
    }

    computerChoiceText.textContent = `The computer chose ${computerThrow}`;

    winText.textContent = winCount;
    loseText.textContent = loseCount;
    drawText.textContent = drawCount;

});

resetButton.addEventListener('click', () => {

    winCount = 0;
    loseCount = 0;
    drawCount = 0;

    currentGameText.style.visibility = 'hidden';
    computerChoiceText.style.visibility = 'hidden';
    winText.textContent = winCount;
    loseText.textContent = loseCount;
    drawText.textContent = drawCount;
    winText.style.color = '#69D2E7';
    loseText.style.color = '#69D2E7';
    drawText.style.color = '#69D2E7';
    
});

