import { getRandomThrow, checkResult } from './get-random-throw.js';

const playButton = document.getElementById('play-button');
let userThrowButton = document.querySelector('input:checked');

let computerThrow;

playButton.addEventListener('click', () => {
    computerThrow = getRandomThrow();
    userThrowButton = document.querySelector('input:checked');
    let userThrow = userThrowButton.value;
    
    console.log('COMPUTER ' + computerThrow);
    console.log('USER ' + userThrow);

    let currentResult = checkResult(userThrow, computerThrow);
    console.log(currentResult);

});

