import {getElementFromTemplate} from '../getElementFromTemplate';
import {renderScreen} from '../renders-screen';
import levelArtistScreen from './level-artist';
import questionsArtist from '../data/questions';
import store from '../data/store';

const template = `<section class="main main--welcome">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <button class="main-play">Начать игру</button>
    <h2 class="title main-title">Правила игры</h2>
    <p class="text main-text">
      Правила просты&nbsp;— за&nbsp;5 минут ответить на все вопросы.<br>
      Ошибиться можно 3 раза.<br>
      Удачи!
    </p>
  </section>`;

const welcomeScreen = getElementFromTemplate(template);

/* переход на следующий экран при клике по кнопке Начать игру */

welcomeScreen.querySelector(`.main-play`).addEventListener(`click`, (event) => {
  event.preventDefault();
  renderScreen(levelArtistScreen(questionsArtist[store.initialState.questionArtistIndex]));
});

export default welcomeScreen;


