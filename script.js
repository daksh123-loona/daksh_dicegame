'use strict';
//decleration
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const score1 = document.querySelector('#score--0');
const score2 = document.getElementById('score--1');
const dice = document.querySelector('.dice');
const rollbtn = document.querySelector('.btn--roll');
const newbtn = document.querySelector('.btn--new');
const holdbtn = document.querySelector('.btn--hold');
const current1 = document.getElementById('current--0');
const current2 = document.getElementById('current--1');
//manupulation
let playing = true;
let scores = [0, 0];
score1.textContent = 0;
score2.textContent = 0;
dice.classList.add('hidden');
let currentScore = 0;
let activeplayer = 0;
rollbtn.addEventListener('click', function () {
  if (playing) {
    //random number
    const diceno = Math.trunc(Math.random() * 6) + 1;
    console.log(diceno);
    //display dice
    dice.classList.remove('hidden');
    dice.src = `dice-${diceno}.png`;
    // check it is one or not
    if (diceno !== 1) {
      currentScore = currentScore + diceno;
      document.getElementById(`current--${activeplayer}`).textContent =
        currentScore;
    } else {
      document.getElementById(`current--${activeplayer}`).textContent = 0;
      currentScore = 0;
      player1.classList.toggle('player--active');
      player2.classList.toggle('player--active');
      activeplayer = activeplayer === 0 ? 1 : 0;
    }
  }
});
holdbtn.addEventListener('click', function () {
  if (playing) {
    scores[activeplayer] += currentScore;
    document.getElementById(`score--${activeplayer}`).textContent =
      scores[activeplayer];

    if (scores[activeplayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.remove('player--active');
      dice.classList.add('hidden');
    } else {
      document.getElementById(`current--${activeplayer}`).textContent = 0;
      currentScore = 0;
      player1.classList.toggle('player--active');
      player2.classList.toggle('player--active');
      activeplayer = activeplayer === 0 ? 1 : 0;
    }
  }
});
newbtn.addEventListener('click', function () {
  score1.textContent = 0;
  score2.textContent = 0;
  current1.textContent = 0;
  current2.textContent = 0;
  player1.classList.remove('player--winner');
  player2.classList.remove('player--winner');
  player1.classList.add('player--active');
  player2.classList.remove('player--active');
  playing = true;
  scores = [0, 0];
  dice.classList.add('hidden');
  currentScore = 0;
  activeplayer = 0;
});
