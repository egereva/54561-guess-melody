import {assert} from 'chai';

import {getResult} from './get-result';

const allResults = [
  {points: 10, notes: 3, time: 10},
  {points: 15, notes: 3, time: 15},
  {points: 8, notes: 2, time: 12},
  {points: 6, notes: 1, time: 5}
];

const result1 = {points: 13, notes: 3, time: 7};
const result2 = {points: 9, notes: 2, time: 10};
const result3 = {points: 20, notes: 3, time: 20};
const result4 = {points: 6, notes: 1, time: 0};
const result5 = {points: 6, notes: 0, time: 20};

describe(`Output result`, () => {
  it(`should return result for 2 place`, () => {
    const result = getResult(allResults, result1);
    const output = `Вы заняли 2 место из 5. Это лучше чем у 60% игроков`;

    assert.strictEqual(output, result);
  });

  it(`should return result for 3  place`, () => {
    const result = getResult(allResults, result2);
    const output = `Вы заняли 3 место из 5. Это лучше чем у 40% игроков`;

    assert.strictEqual(output, result);
  });

  it(`should return result for 1 place`, () => {
    const result = getResult(allResults, result3);
    const output = `Вы заняли 1 место из 5. Это лучше чем у 80% игроков`;

    assert.strictEqual(output, result);
  });

  it(`should return fail if the time is over`, () => {
    const result = getResult(allResults, result4);
    const output = `Время вышло! Вы не успели отгадать все мелодии`;

    assert.strictEqual(output, result);
  });

  it(`should return fail if the notes is over`, () => {
    const result = getResult(allResults, result5);
    const output = `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;

    assert.strictEqual(output, result);
  });

});
