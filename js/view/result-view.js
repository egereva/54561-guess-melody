import {getResult} from './../data/get-result';
import AbstractView from './abstract-view';

const NOTES = 3;

export default class ResultView extends AbstractView {
  constructor(otherResults, currentPlayer, templateResult) {
    super();
    this.otherResults = otherResults;
    this.currentPlayer = currentPlayer;
    this.templateResult = templateResult;
  }

  get template() {
    return `
		<section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <h2 class="title">${this.templateResult.h2}</h2>
    ${this.setResultScreen()}
    <span role="button" tabindex="0" class="main-replay">${this.templateResult.button}</span>
  </section>`;
  }

  bind() {
    const replayBtn = this.element.querySelector(`.main-replay`);
    replayBtn.addEventListener(`click`, this.onClickReplay);
  }


  setResultScreen() {
    if (this.currentPlayer.notes <= 0) {
      return `<div class="main-stat">${getResult(this.otherResults, this.currentPlayer)}</div>`;
    } else {
      return `<div class="main-stat">За&nbsp;3&nbsp;минуты и 25&nbsp;секунд
         <br>вы&nbsp;набрали ${this.currentPlayer.points} баллов (8 быстрых)
         <br>совершив ${NOTES - this.currentPlayer.notes} ошибки
        </div>
      <span class="main-comparison">${getResult(this.otherResults, this.currentPlayer)}</span>`;
    }
  }

  onClickReplay() {}

}
