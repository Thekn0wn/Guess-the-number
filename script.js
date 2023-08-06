'use strict'; //using strict mode

var ale = () => {
  alert('😊Random numbers are generated between 1-20...Pls enter accordingly');
}; //Displaying alert

let secretNumber = Math.floor(Math.random() * 20) + 1; //Gnerating random no.

let score = 20; //score variable
let highScore = 0; //highScore variable

document.querySelector('.check').addEventListener('click', function () {
  //addEventListener
  const guess = Number(document.querySelector('.guess').value); //defining the var guess and coverting it to a number and storing the value of the text input in it

  console.log(guess, typeof guess); //consoling the var and its type

  if (!guess) {
    //checking if there is no number
    document.querySelector('.message').textContent = '⛔ No number'; //displaying the message
  } else if (guess === secretNumber) {
    //checking if correct
    document.querySelector('.message').textContent = '🎉 Correct Number!'; //displaying the message
    document.querySelector('body').style.backgroundColor = '#60b347'; //changing the background color to greenish
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highScore) {
      //checking if answer is higher
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '📈 Number too high' : '📉 Number too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😭 You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
  // } else if (guess > secretNumber) {
  //   //checking if answer is lower
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Number too high';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '😭 You lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Number too low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '😭 You lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  //again function
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...'; //replacing text
  document.querySelector('.score').textContent = score; //replacing text
  document.querySelector('.number').textContent = '?'; //replacing text
  document.querySelector('.guess').value = ''; //replacing text

  document.querySelector('body').style.backgroundColor = '#222'; //replacing styles
  document.querySelector('.number').style.width = '15rem'; //replacing styles
});
