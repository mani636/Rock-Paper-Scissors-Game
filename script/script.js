'use strict';

//
const userScoreE1 = document.getElementById('score-value');
const displayResult = document.getElementById('.result-container');
const resultEl = document.getElementById('result');

// global variables
let result = null;
let score = 0;

// Functions
let getCompChoice = function () {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    return 'paper';
  } else if (randomNumber === 2) {
    return 'scissors';
  } else randomNumber === 3;
  return 'rock';
};

const playGame = function (weapon) {
  const user = weapon;
  const comp = getCompChoice();
  result = getResult(user, comp);
  resultEl.innerText = result;
  if (result === 'YOU WON') {
    score = score + 1;
  }
  userScoreE1.innerText = score;
};

const getResult = function (userChoice, compChoice) {
  if (userChoice === 'paper') {
    if (compChoice === 'paper') {
      return 'DRAW';
    } else if (compChoice === 'scissors') {
      return 'YOU LOST';
    } else if (compChoice === 'rock') {
      return 'YOU WON';
    }
  } else if (userChoice === 'scissors') {
    if (compChoice === 'paper') {
      return 'YOU WON';
    } else if (compChoice === 'scissors') {
      return 'DRAW';
    } else if (compChoice === 'rock') {
      return 'YOU LOST';
    }
  } else if (userChoice === 'rock') {
    if (compChoice === 'paper') {
      return 'YOU LOST';
    } else if (compChoice === 'scissors') {
      return 'YOU WON';
    } else if (compChoice === 'rock') {
      return 'DRAW';
    }
  }
};
