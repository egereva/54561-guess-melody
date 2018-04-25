import {getElementFromTemplate} from '../getElementFromTemplate';
import {renderScreen} from '../renders-screen';
import welcomeScreen from './welcome';
import {getResult} from '../data/get-result';

const NOTES = 3;

export default (otherResults, currentPlayer, templateResult) => {

  const setResultScreen = () => {
    if (currentPlayer.notes <= 0) {
      return `<div class="main-stat">${getResult(otherResults, currentPlayer)}</div>`;
    } else {
      return `<div class="main-stat">За&nbsp;3&nbsp;минуты и 25&nbsp;секунд
         <br>вы&nbsp;набрали ${currentPlayer.points} баллов (8 быстрых)
         <br>совершив ${NOTES - currentPlayer.notes} ошибки
        </div>
      <span class="main-comparison">${getResult(otherResults, currentPlayer)}</span>`;
    }
  };
  const template = `<section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <h2 class="title">${templateResult.h2}</h2>
    ${setResultScreen()}
    <span role="button" tabindex="0" class="main-replay">${templateResult.button}</span>
  </section>`;

  const resultScreen = getElementFromTemplate(template);

  resultScreen.querySelector(`.main-replay`).addEventListener(`click`, (event) => {
    event.preventDefault();
    renderScreen(welcomeScreen);
  });

  return resultScreen;
};
