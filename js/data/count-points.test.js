import {assert} from 'chai';

import {countPoints} from './count-points';
import {NOTES} from './game-options';

const gameOverErrors = [
  {correct: true, speed: 60}, {correct: false, speed: 35}, {correct: true, speed: 50},
  {correct: true, speed: 20}, {correct: true, speed: 40}, {correct: true, speed: 55},
  {correct: false, speed: 37}, {correct: true, speed: 25}, {correct: true, speed: 50}
];

const gameOverFewAnswers = [
  {correct: true, speed: 60}, {correct: true, speed: 35}, {correct: true, speed: 50},
  {correct: true, speed: 20}, {correct: true, speed: 40}, {correct: true, speed: 55},
  {correct: true, speed: 37}
];

const gameFast = [
  {correct: true, speed: 20}, {correct: true, speed: 25}, {correct: true, speed: 29},
  {correct: true, speed: 19}, {correct: true, speed: 20}, {correct: true, speed: 23},
  {correct: true, speed: 15}, {correct: true, speed: 10}, {correct: true, speed: 20},
  {correct: true, speed: 10}
];

const gameSlow = [
  {correct: true, speed: 50}, {correct: true, speed: 40}, {correct: true, speed: 36},
  {correct: true, speed: 47}, {correct: true, speed: 47}, {correct: true, speed: 45},
  {correct: true, speed: 55}, {correct: true, speed: 55}, {correct: true, speed: 60},
  {correct: true, speed: 70}
];

const gameSlowAndFast = [
  {correct: true, speed: 20}, {correct: true, speed: 35}, {correct: true, speed: 55},
  {correct: true, speed: 50}, {correct: true, speed: 20}, {correct: true, speed: 23},
  {correct: true, speed: 15}, {correct: true, speed: 10}, {correct: true, speed: 37},
  {correct: true, speed: 10}
];

const gameWithErrors = [
  {correct: true, speed: 50}, {correct: false, speed: 35}, {correct: true, speed: 55},
  {correct: true, speed: 50}, {correct: true, speed: 50}, {correct: true, speed: 33},
  {correct: true, speed: 45}, {correct: false, speed: 40}, {correct: true, speed: 37},
  {correct: true, speed: 50}
];

describe(`Count points`, () => {

  it(`should return -1 if the notes is over`, () => {
    assert.equal(countPoints(gameOverErrors, NOTES), -1);
  });

  it(`should return -1 if notes are negative`, () => {
    assert.equal(countPoints(gameSlowAndFast, -1), -1);
  });

  it(`should return -1 if number of answers < 10`, () => {
    assert.equal(countPoints(gameOverFewAnswers, -1), -1);
  });

  it(`should return 10 if game is slow, but all answers are correct`, () => {
    assert.equal(countPoints(gameSlow, NOTES), 10);
  });

  it(`should return 20 if game is fast, but all answers are correct`, () => {
    assert.equal(countPoints(gameFast, NOTES), 20);
  });

  it(`should return 16 if all answers are correct and 6 of them are fast`, () => {
    assert.equal(countPoints(gameSlowAndFast, NOTES), 16);
  });

  it(`should return 4 if game is slow and 2 answers are incorrect`, () => {
    assert.equal(countPoints(gameWithErrors, NOTES), 4);
  });

});

