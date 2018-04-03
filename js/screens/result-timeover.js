import {getElementFromTemplate} from '../getElementFromTemplate';
import {renderScreen} from '../renders-screen';
import welcomeScreen from './welcome';

const template = `<section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">Увы и ах!</h2>
    <div class="main-stat">Время вышло!<br>Вы не успели отгадать все мелодии</div>
    <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>
  </section>`;

const resultTimeoverScreen = getElementFromTemplate(template);

/* переход к первому экрану при клике по кнопке Попробовать ещё раз */

resultTimeoverScreen.querySelector(`.main-replay`).addEventListener(`click`, (event) => {
  event.preventDefault();
  renderScreen(welcomeScreen);
});


export default resultTimeoverScreen;