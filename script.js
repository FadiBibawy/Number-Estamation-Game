'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'correct answer';
document.querySelector('.score').textContent = '50';
*/
const secretNumber = Math.round(Math.random() * 20);
// document.querySelector('.number').textContent = secretNumber;
let score = 4;

document.querySelector('.again').addEventListener('click', function () {
  window.location.reload();
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'no number!';
  } else if (secretNumber === guess) {
    document.querySelector('.message').textContent = 'CORRECT ANSWER!';
    document.body.style.backgroundColor = 'green';
    document.querySelector('.highscore').textContent = score;
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.guesstext').textContent =
      'You have won my Heart Shero 💖';
    document.querySelector('.between').textContent = '';
  } else if (secretNumber < guess) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'GAME OVER!';
      document.body.style.backgroundColor = 'red';
      document.querySelector('.score').textContent = 0;
    }
  } else if (secretNumber > guess) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'GAME OVER!';
      document.body.style.backgroundColor = 'red';
      document.querySelector('.score').textContent = 0;
    }
  }
});
