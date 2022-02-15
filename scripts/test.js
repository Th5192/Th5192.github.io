let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === '../images/1.jpg') {
        myImage.setAttribute('src', '../images/2.jpg');
    } else {
        myImage.setAttribute('src', '../images/1.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
let mySubHeading = document.querySelector('h2');

function setUserName() {
    let myName = prompt('Please enter your name.');

    if (!myName) {
        setUserName()
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Welcome cat generalissimo ' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome supreme cat generalissimo ' + storedName;
}


myButton.onclick = function() {
    setUserName();
}

// Cat Generalship Quiz Section

let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;
guessField.focus();

function checkGuess() {
    const userGuess = Number(guessField.value);

    if (guessCount === 1) { 
        guesses.textContent = 'Previous guesses: ';
    }
    guesses.textContent += userGuess + ' ';

    if (userGuess === randomNumber) {
        lastResult.textContent = 'Congratulations! You got it right!';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
    } else if (guessCount === 10) { 
        lastResult.textContent = 'Game over!';
        lowOrHi.textContent = '';
        setGameOver();
    } else {
        lastResult.textContent = 'Wrong!'
        lastResult.style.backgroundColor = 'red';
        if(userGuess < randomNumber) {
            lowOrHi.textContent = 'Last guess was too low!';
        } else if(userGuess > randomNumber){
            lowOrHi.textContent = 'Last guess was too high!';
        }
    }

    guessCount++;
    guessField.value = '';
    guessField.focus();

}

function setGameOver() {
    guessField.disabled = true
    guessSubmit.disabled = true
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    document.body.append(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    guessCount = 1;

    const resetParas = document.querySelectorAll('.result Paras p');
    for (const resetPara of resetParas) {
        resetPara.textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    lastResult.style.backgroundColor = 'green';

    randomNumber = Math.floor(Math.random() * 100) +1;
}


guessSubmit.addEventListener('click', checkGuess);