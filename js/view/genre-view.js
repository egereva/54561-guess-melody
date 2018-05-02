import AbstractView from './abstract-view';
import header from './../screens/header';
import {setPauseAndPlay} from './../playAndPause';

export default class GenreView extends AbstractView {
  constructor(question, state) {
    super();
    this.title = question.title;
    this.answers = question.answers;
    this.state = state;
  }

  get template() {
    return `
			<section class="main main--level main--level-genre">
    <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
      <circle
        cx="390" cy="390" r="370"
        class="timer-line"
        style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>
    </svg>
    
    ${header(this.state.currentState)}
    
    <div class="main-wrap">
      <h2 class="title">${this.title}</h2>
      <form class="genre">
        ${this.renderAnswers(this.answers)}
        <button class="genre-answer-send" type="submit">Ответить</button>
      </form>
    </div>
  </section>`;
  }

  bind() {
    const answersCheckbox = this.element.querySelectorAll(`input[type=checkbox]`);
    const answerBtn = this.element.querySelector(`.genre-answer-send`);
    Array.from(answersCheckbox).forEach((answer) => {
      answer.addEventListener(`click`, this.onClickAnswer);
    });
    answerBtn.addEventListener(`click`, this.onClickSubmit);
  }

  controlPlayer() {
    const answers = this.element.querySelectorAll(`.genre-answer`);
    [...answers].forEach((item) => {
      const playerBtn = item.querySelector(`.player-control`);
      const audio = item.querySelector(`audio`);
      setPauseAndPlay(playerBtn, audio);
    });
  }

  resetForm() {
    const answerForm = this.element.querySelector(`.genre`);
    answerForm .reset();
  }

  renderAnswers(answers) {
    return answers.map((answer, index) => ` 
    <div class="genre-answer">
      <div class="player-wrapper">
        <div class="player">
          <audio src="${answer.src}"></audio>
          <button class="player-control"></button>
          <div class="player-track">
            <span class="player-status"></span>
          </div>
        </div>
      </div>
      <input type="checkbox" name="answer" value="answer-${index + 1}" id="a-${index + 1}">
      <label class="genre-answer-check" for="a-${index + 1}"></label>
    </div>`).join(``);
  }

  onClickAnswer() {}

  onClickSubmit() {}

}
