import {getElementFromTemplate} from '../getElementFromTemplate';
import {setPauseAndPlay} from '../playAndPause';
import header from './header';
import switchScreen from '../switch-screens';
import questionsArtist from '../data/questions';
import store from '../data/store';


const TIME = 60;

export default (data) => {
  let currentState = Object.assign({}, store.initialState);
  currentState.notes = store.notes;
  const renderAnswers = (question) => question.answers.map((answer, index) => `<div class="main-answer-wrapper">
    <input class="main-answer-r" type="radio" id="answer-${index + 1}" name="answer" value="val-${index + 1}"/>
    <label class="main-answer" for="answer-${index + 1}">
      <img class="main-answer-preview" src="${answer.image}" alt="${answer.artist}" width="134" height="134">
        ${answer.artist}
      </label>
  </div>`).join(``);

  const template = `<section class="main main--level main--level-artist">
    <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
      <circle
        cx="390" cy="390" r="370"
        class="timer-line"
        style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center">
      </circle>
    </svg>
    
    ${header(currentState)}
    
    <div class="main-wrap">
      <h2 class="title main-title">Кто исполняет эту песню?</h2>
      <div class="player-wrapper">
        <div class="player">
          <audio src="${data.src}"></audio>
          <button class="player-control"></button>
          <div class="player-track">
            <span class="player-status"></span>
          </div>
        </div>
      </div>
      <form class="main-list">
        ${renderAnswers(data)}
      </form>
    </div>
  </section>`;

  const levelArtistScreen = getElementFromTemplate(template);
  const playerBtn = levelArtistScreen.querySelector(`.player-control`);
  const audio = levelArtistScreen.querySelector(`audio`);

  [...levelArtistScreen.querySelectorAll(`.main-answer`)].forEach((answer) => {
    answer.addEventListener(`click`, (event) => {
      event.preventDefault();
      const selectedAnswerIndex = event.currentTarget.parentNode.querySelector(`input`).value.substr(-1);
      const currentAnswer = {};
      if (Number(selectedAnswerIndex) === questionsArtist[store.currentState.questionArtistIndex].correct) {
        currentAnswer.correct = true;
        currentAnswer.speed = TIME;
      } else {
        currentAnswer.correct = false;
        currentAnswer.speed = TIME;
        store.removeNote();
      }
      store.appendAnswer(currentAnswer);
      switchScreen();

    });
  });

  setPauseAndPlay(playerBtn, audio);

  return levelArtistScreen;

};
