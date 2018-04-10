export default class Timer {
  constructor(initialTime = 0) {
    this.time = initialTime;
  }

  tick() {
    this.time--;
    if (this.time < 0) {
      return -1;
    }

    if (this.time === 0) {
      return (`Time is over`);
    }

    return this.time;
  }
}

