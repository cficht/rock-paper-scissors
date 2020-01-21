// IMPORT MODULES under test here:
import { checkResult } from '../get-random-throw.js';

const test = QUnit.test;

test('player gets paper and computer gets rock', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const playerTest = 'paper';
    const computerTest = 'rock';

    const expectedResult = 'win';

    //Act 
    // Call the function you're testing and set the result to a const

    const actualResult = checkResult(playerTest, computerTest);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(actualResult, expectedResult);
});

test('player gets rock and computer gets scissors', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const playerTest = 'rock';
    const computerTest = 'scissors';

    const expectedResult = 'win';

    //Act 
    // Call the function you're testing and set the result to a const

    const actualResult = checkResult(playerTest, computerTest);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(actualResult, expectedResult);
});

test('player gets scissors and computer gets paper', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const playerTest = 'scissors';
    const computerTest = 'paper';

    const expectedResult = 'win';

    //Act 
    // Call the function you're testing and set the result to a const

    const actualResult = checkResult(playerTest, computerTest);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(actualResult, expectedResult);
});

test('computer gets paper and player gets rock', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const computerTest = 'paper';
    const playerTest = 'rock';


    const expectedResult = 'lose';

    //Act 
    // Call the function you're testing and set the result to a const

    const actualResult = checkResult(playerTest, computerTest);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(actualResult, expectedResult);
});

test('computer gets paper and player gets rock', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const computerTest = 'rock';
    const playerTest = 'scissors';


    const expectedResult = 'lose';

    //Act 
    // Call the function you're testing and set the result to a const

    const actualResult = checkResult(playerTest, computerTest);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(actualResult, expectedResult);
});

test('computer gets scissors and player gets paper', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const computerTest = 'scissors';
    const playerTest = 'paper';


    const expectedResult = 'lose';

    //Act 
    // Call the function you're testing and set the result to a const

    const actualResult = checkResult(playerTest, computerTest);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(actualResult, expectedResult);
});

test('computer gets rock and player gets rock', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const computerTest = 'rock';
    const playerTest = 'rock';


    const expectedResult = 'draw';

    //Act 
    // Call the function you're testing and set the result to a const

    const actualResult = checkResult(playerTest, computerTest);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(actualResult, expectedResult);
});

test('computer gets paper and player gets paper', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const computerTest = 'paper';
    const playerTest = 'paper';


    const expectedResult = 'draw';

    //Act 
    // Call the function you're testing and set the result to a const

    const actualResult = checkResult(playerTest, computerTest);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(actualResult, expectedResult);
});

test('computer gets scissors and player gets scissors', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const computerTest = 'scissors';
    const playerTest = 'scissors';


    const expectedResult = 'draw';

    //Act 
    // Call the function you're testing and set the result to a const

    const actualResult = checkResult(playerTest, computerTest);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(actualResult, expectedResult);
});

