'use strict';

var ale = () => {
  alert('😊Random numbers are generated between 1-20...Pls enter accordingly');
}; //Displaying alert

const secretNumber = Math.floor(Math.random() * 20) + 1; //Gnerating random no.
// document.querySelector('.number').textContent = secretNumber;

let score = 20; //score variable
let highScore = 0; //highScore variable

document.querySelector('.check').addEventListener('click', function () {
  //addEventListener
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Number too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😭 You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Number too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😭 You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }

  //   if (score === 0) {
  //     document.querySelector('.message').textContent = '😭 You lost the game';
  //   }
});
