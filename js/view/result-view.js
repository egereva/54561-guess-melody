import {getResult} from './../data/get-result';
import AbstractView from './abstract-view';
import store from './../data/store';
import {countFastAnswers} from './../data/count-fast-answers';
import {formatMin, formatSec, formatErrors} from '../helpers';

export default class ResultView extends AbstractView {
  constructor(allResults, currentPlayer, templateResult) {
    super();
    this.allResults = allResults;
    this.currentPlayer = currentPlayer;
    this.templateResult = templateResult;
  }

  get template() {
    return `
		<section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <h2 class="title">${this.templateResult.h2}</h2>
    ${this.setFinalScreen()}
    <span role="button" tabindex="0" class="main-replay">${this.templateResult.button}</span>
  </section>`;
  }

  bind() {
    const replayBtn = this.element.querySelector(`.main-replay`);
    replayBtn.addEventListener(`click`, this.onClickReplay);
  }


  setFinalScreen() {
    if (this.currentPlayer.notes <= 0 || this.currentPlayer.time <= 0) {
      return `<div class="main-stat">${getResult(this.allResults, this.currentPlayer)}</div>`;
    } else {
      return `<div class="main-stat">За&nbsp;${formatMin(this.currentPlayer.time, store.initialState.time)} и ${formatSec(this.currentPlayer.time, store.initialState.time)}
         <br>вы&nbsp;набрали ${this.currentPlayer.points} баллов (${countFastAnswers(store.resultsPlayer)} быстрых)
         <br>совершив ${formatErrors(this.currentPlayer.notes)}
        </div>
      <span class="main-comparison">${getResult(this.allResults, this.currentPlayer)}</span>`;
    }
  }

  onClickReplay() {}

}
