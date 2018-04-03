import {getElementFromTemplate} from '../getElementFromTemplate';
import {renderScreen} from '../renders-screen';
import resultWinScreen from './result-win';
import resultTimeoverScreen from './result-timeover';
import resultLimitScreen from './result-limit';

const template = `<section class="main main--level main--level-genre">
    <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
      <circle
        cx="390" cy="390" r="370"
        class="timer-line"
        style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>

      <div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">
        <span class="timer-value-mins">05</span><!--
        --><span class="timer-value-dots">:</span><!--
        --><span class="timer-value-secs">00</span>
      </div>
    </svg>
    <div class="main-mistakes">
      <img class="main-mistake" src="img/wrong-answer.png" width="35" height="49">
      <img class="main-mistake" src="img/wrong-answer.png" width="35" height="49">
      <img class="main-mistake" src="img/wrong-answer.png" width="35" height="49">
    </div>

    <div class="main-wrap">
      <h2 class="title">Выберите инди-рок треки</h2>
      <form class="genre">
        <div class="genre-answer">
          <div class="player-wrapper">
            <div class="player">
              <audio></audio>
              <button class="player-control player-control--pause"></button>
              <div class="player-track">
                <span class="player-status"></span>
              </div>
            </div>
          </div>
          <input type="checkbox" name="answer" value="answer-1" id="a-1">
          <label class="genre-answer-check" for="a-1"></label>
        </div>

        <div class="genre-answer">
          <div class="player-wrapper">
            <div class="player">
              <audio></audio>
              <button class="player-control player-control--play"></button>
              <div class="player-track">
                <span class="player-status"></span>
              </div>
            </div>
          </div>
          <input type="checkbox" name="answer" value="answer-1" id="a-2">
          <label class="genre-answer-check" for="a-2"></label>
        </div>

        <div class="genre-answer">
          <div class="player-wrapper">
            <div class="player">
              <audio></audio>
              <button class="player-control player-control--play"></button>
              <div class="player-track">
                <span class="player-status"></span>
              </div>
            </div>
          </div>
          <input type="checkbox" name="answer" value="answer-1" id="a-3">
          <label class="genre-answer-check" for="a-3"></label>
        </div>

        <div class="genre-answer">
          <div class="player-wrapper">
            <div class="player">
              <audio></audio>
              <button class="player-control player-control--play"></button>
              <div class="player-track">
                <span class="player-status"></span>
              </div>
            </div>
          </div>
          <input type="checkbox" name="answer" value="answer-1" id="a-4">
          <label class="genre-answer-check" for="a-4"></label>
        </div>

        <button class="genre-answer-send" type="submit" disabled>Ответить</button>
      </form>
    </div>
  </section>`;

const levelGenreScreen = getElementFromTemplate(template);

/* переключение на следующий экран */

const answerBtn = levelGenreScreen.querySelector(`.genre-answer-send`);
const answerForm = levelGenreScreen.querySelector(`.genre`);
const answers = answerForm.elements.answer;

/* проверяет выбран ли один из возможных вариантов ответа */

[...answers].forEach((answer) => {
  answer.addEventListener(`change`, () => {
    if ([...answers].some((it) => it.checked)) {
      answerBtn.disabled = false;
    } else {
      answerBtn.disabled = true;
    }
  });
});

/* определяет какой из экранов результатов показать */

let results = [resultWinScreen, resultTimeoverScreen, resultLimitScreen];
let randomResult = () => results[Math.floor(Math.random() * results.length)];

/* переход к следующему экрану при клике по кнопке Ответить */

answerBtn.addEventListener(`click`, (event) => {
  event.preventDefault();
  renderScreen(randomResult());

  /* сброс формы и деактивация кнопки Ответить */
  answerForm.reset();
  answerBtn.disabled = true;
});


export default levelGenreScreen;
