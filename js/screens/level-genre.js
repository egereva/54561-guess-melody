import {getElementFromTemplate} from '../getElementFromTemplate';
import {setPauseAndPlay} from '../playAndPause';
import header from './header';
import switchScreen from '../switch-screens';
import questions from '../data/questions';
import store from '../data/store';

const TIME = 60;

export default (data) => {
  let currentState = Object.assign({}, store.initialState);
  currentState.notes = store.notes;
  const renderAnswers = (question) => question.answers.map((answer, index) => `<div class="genre-answer">
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


  const template = `<section class="main main--level main--level-genre">
    <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
      <circle
        cx="390" cy="390" r="370"
        class="timer-line"
        style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>
    </svg>
    
    ${header(currentState)}
    
    <div class="main-wrap">
      <h2 class="title">${data.title}</h2>
      <form class="genre">
        ${renderAnswers(data)}
        <button class="genre-answer-send" type="submit">Ответить</button>
      </form>
    </div>
  </section>`;

  const levelGenreScreen = getElementFromTemplate(template);

  const answerBtn = levelGenreScreen.querySelector(`.genre-answer-send`);
  const answerForm = levelGenreScreen.querySelector(`.genre`);
  const answersCheckbox = levelGenreScreen.querySelectorAll(`input[type=checkbox]`);
  answerBtn.disabled = true;

  Array.from(answersCheckbox).forEach((answer) => {
    answer.addEventListener(`change`, () => {
      if (Array.from(answersCheckbox).some((it) => it.checked)) {
        answerBtn.disabled = false;
      } else {
        answerBtn.disabled = true;
      }
    });
  });

  const answers = levelGenreScreen.querySelectorAll(`.genre-answer`);
  [...answers].forEach((item) => {
    const playerBtn = item.querySelector(`.player-control`);
    const audio = item.querySelector(`audio`);
    setPauseAndPlay(playerBtn, audio);
  });


  answerBtn.addEventListener(`click`, (event) => {
    event.preventDefault();
    const arr = Array.from(answersCheckbox);
    const selectedAnswersIndex = arr.filter((it) => it.checked).map((it) => arr.indexOf(it) + 1);
    const rightAnswer = questions[store.currentState.questionGenreIndex].correct;
    const isRight = selectedAnswersIndex.every((elem) => rightAnswer.indexOf(elem) !== -1 && selectedAnswersIndex.length === rightAnswer.length);
    const currentAnswer = {};

    if (isRight) {
      currentAnswer.correct = true;
      currentAnswer.speed = TIME;
    } else {
      currentAnswer.correct = false;
      currentAnswer.speed = TIME;
      store.removeNote();
    }

    store.appendAnswer(currentAnswer);

    /* сброс формы и деактивация кнопки Ответить */
    answerForm.reset();
    answerBtn.disabled = true;

    switchScreen();
  });


  return levelGenreScreen;
};
