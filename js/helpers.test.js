import {assert} from 'chai';
import {formatSec} from './helpers';
import {formatMin} from './helpers';
import {formatErrors} from './helpers';

describe(`Noun declensions`, () => {
  it(`should return correct form when 0, 5-20`, () => {
    assert.equal(formatSec(280, 300), `20 секунд`);
    assert.equal(formatSec(285, 300), `15 секунд`);
    assert.equal(formatSec(286, 300), `14 секунд`);
    assert.equal(formatSec(294, 300), `6 секунд`);
    assert.equal(formatMin(286, 300), `0 минут`);
    assert.equal(formatMin(0, 300), `5 минут`);
    assert.equal(formatErrors(3), `0 ошибок`);
  });
  it(`should return correct form when number 1, 21, 31`, () => {
    assert.equal(formatSec(299, 300), `1 секунду`);
    assert.equal(formatSec(279, 300), `21 секунду`);
    assert.equal(formatSec(269, 300), `31 секунду`);
    assert.equal(formatMin(230, 300), `1 минуту`);
    assert.equal(formatErrors(2), `1 ошибку`);
  });
  it(`should return correct form when number 2, 3, 4, 22`, () => {
    assert.equal(formatSec(298, 300), `2 секунды`);
    assert.equal(formatSec(296, 300), `4 секунды`);
    assert.equal(formatSec(278, 300), `22 секунды`);
    assert.equal(formatMin(150, 300), `2 минуты`);
    assert.equal(formatMin(100, 300), `3 минуты`);
    assert.equal(formatErrors(1), `2 ошибки`);
  });
});
