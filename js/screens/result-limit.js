import {getElementFromTemplate} from '../getElementFromTemplate';
import {renderScreen} from '../renders-screen';
import welcomeScreen from './welcome';

const template = `<section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">Какая жалость!</h2>
    <div class="main-stat">У вас закончились все попытки.<br>Ничего, повезёт в следующий раз!</div>
    <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>
  </section>`;

const resultLimitScreen = getElementFromTemplate(template);

/* переход к первому экрану при клике по кнопке Попробовать ещё раз */

resultLimitScreen.querySelector(`.main-replay`).addEventListener(`click`, (event) => {
  event.preventDefault();
  renderScreen(welcomeScreen);
});

export default resultLimitScreen;