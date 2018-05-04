import AbstractView from './abstract-view';
import {formatTime} from '../helpers';

const NOTES = 3;
export default class HeaderView extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
  }

  get template() {
    return `
      <div>
        <div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">
          <span class="timer-value-mins">${formatTime(Math.trunc(this.state.time / 60))}</span><!--
          --><span class="timer-value-dots">:</span><!--
          --><span class="timer-value-secs">${formatTime(this.state.time % 60)}</span>
        </div>
        <div class="main-mistakes">
        </div>
      </div>
    `;
  }


  bind() {
    this.timerItems = this.element.querySelectorAll(`.timer-value span`);
    this.notes = this.element.querySelector(`.main-mistakes`);
    this.min = this.element.querySelector(`.timer-value-mins`);
    this.sec = this.element.querySelector(`.timer-value-secs`);
  }

  updateTime() {
    this.sec.textContent = formatTime(this.state.time % 60);
    this.min.textContent = formatTime(Math.trunc(this.state.time / 60));
  }

  updateNotes() {
    this.notes.innerHTML = new Array(NOTES - this.state.notes)
        .fill(`<img class="main-mistake" src="img/wrong-answer.png" width="35" height="49">`)
        .join(``);
  }

  addBlinkTimer() {
    Array.from(this.timerItems).forEach((item) => {
      item.style.color = `red`;
      item.classList.add(`blink`);
    });
  }

  removeBlinkTimer() {
    Array.from(this.timerItems).forEach((item) => {
      item.style.color = `#ff9749`;
      item.classList.remove(`blink`);
    });
  }

}
