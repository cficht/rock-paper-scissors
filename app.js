// imports 2 functions from get-random-throw script
import { getRandomThrow, checkResult } from './get-random-throw.js';

// grabs dom
const playButton = document.getElementById('play-button');
const winText = document.getElementById('win-text');
const loseText = document.getElementById('lose-text');
const drawText = document.getElementById('draw-text');
const currentGameText = document.getElementById('current-game-text');
const computerChoiceText = document.getElementById('computer-choice-text');
const resetButton = document.getElementById('reset-button');
const counters = document.querySelectorAll('.counter');

// sets initial state
let winCount = 0;
let loseCount = 0;
let drawCount = 0;

// hides the game result text
currentGameText.style.visibility = 'hidden';
computerChoiceText.style.visibility = 'hidden';

playButton.addEventListener('click', () => {

    // makes game result text visible
    currentGameText.style.visibility = 'visible';
    computerChoiceText.style.visibility = 'visible';

    // restores win, lose and draw text color to default
    colorReset();

    // gets computer and user's throws and checks who wins
    let computerThrow = getRandomThrow();
    let userThrow = document.querySelector('input:checked').value;
    let currentResult = checkResult(userThrow, computerThrow);

    // uses results of who wins to update state and some dom
    if (currentResult === 'win') {
        winCount++;
        currentGameText.textContent = 'YOU WIN!!';
    } else if (currentResult === 'lose') {
        loseCount++;
        currentGameText.textContent = 'YOU LOSE!!!';
    } else if (currentResult === 'draw') {
        drawCount++;
        currentGameText.textContent = 'DRAW!!!';
    }

    const rpsColors = {
        win: 'yellow',
        lose: 'red',
        draw: 'black'
    };

    // update color of current result to text elements - golfed
    const resultColor = rpsColors[currentResult];

    [winText, loseText, drawText][(['win', 'lose', 'draw'].indexOf(currentResult))].style.color = resultColor;
    currentGameText.style.color = resultColor;

    // updates the remaining dom
    computerChoiceText.textContent = `The computer chose ${computerThrow}`;
    winText.textContent = winCount;
    loseText.textContent = loseCount;
    drawText.textContent = drawCount;

});

// restores initial state on button click
resetButton.addEventListener('click', () => {

    winCount = 0;
    loseCount = 0;
    drawCount = 0;

    currentGameText.style.visibility = 'hidden';
    computerChoiceText.style.visibility = 'hidden';

    winText.textContent = winCount;
    loseText.textContent = loseCount;
    drawText.textContent = drawCount;

    colorReset();
    
});

function colorReset() {
    for (let i = 0; i < counters.length; i++) {
        counters[i].style.color = '#69D2E7';
    }
}