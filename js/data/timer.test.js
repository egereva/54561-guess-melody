import {assert} from 'chai';
import Timer from './timer';

describe(`Timer`, () => {
  it(`should return time left after .tick()`, () => {
    const timer = new Timer(40);

    assert.equal(timer.tick(), 39);
    assert.equal(timer.tick(), 38);
    assert.equal(timer.tick(), 37);
  });

  it(`should return message if time is over`, () => {
    const timer = new Timer(1);

    assert.equal(timer.tick(), `Time is over`);
  });

  it(`should return -1 if time is negative`, () => {
    const timer = new Timer(-1);

    assert.equal(-1, timer.tick());
  });
});


