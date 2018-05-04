import {getResult} from './../data/get-result';
import AbstractView from './abstract-view';
import store from './../data/store';
import {countFastAnswers} from './../data/count-fast-answers';
import {formatMin} from './../format-time';
import {formatSec} from './../format-time';

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
    if (this.currentPlayer.notes <= 0 || this.currentPlayer.time <= 0) {
      return `<div class="main-stat">${getResult(this.otherResults, this.currentPlayer)}</div>`;
    } else {
      return `<div class="main-stat">За&nbsp;${formatMin(this.currentPlayer.time, store.initialState.time)} и ${formatSec(this.currentPlayer.time, store.initialState.time)}
         <br>вы&nbsp;набрали ${this.currentPlayer.points} баллов (${countFastAnswers(store.resultsPlayer)} быстрых)
         <br>совершив ${NOTES - this.currentPlayer.notes} ошибки
        </div>
      <span class="main-comparison">${getResult(this.otherResults, this.currentPlayer)}</span>`;
    }
  }

  onClickReplay() {}

}
