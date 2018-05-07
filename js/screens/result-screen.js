import {renderScreen} from './../renders-screen';
import Application from './../application';
import ResultView from './../view/result-view';
import {countPoints} from './../data/count-points';

const RESULT_TEXT = {
  win: {
    h2: `Вы настоящий меломан!`,
    button: `Сыграть ещё раз`
  },
  notesOver: {
    h2: `Какая жалость!`,
    button: `Попробовать ещё раз`
  },
  timeOver: {
    h2: `Увы и ах!`,
    button: `Попробовать ещё раз`
  }
};

export default class FinalScreen {
  constructor(state) {
    this.state = state;
  }

  showResult(data) {
    if (data) {
      data.forEach((item) => {
        const points = countPoints(item);
        this.state.allResults.push(points);
      });
    }
    const points = countPoints(this.state.resultsPlayer, this.state.notes, this.state.time);
    const currentPlayer = {};
    currentPlayer.points = points;
    currentPlayer.notes = this.state.notes;
    currentPlayer.time = this.state.time;
    let templateResult;
    if (currentPlayer.time <= 0) {
      templateResult = RESULT_TEXT.timeOver;
    } else if (currentPlayer.notes <= 0) {
      templateResult = RESULT_TEXT.notesOver;
    } else {
      templateResult = RESULT_TEXT.win;
    }
    this.view = new ResultView(this.state.allResults, currentPlayer, templateResult);
    this.view.onClickReplay = () => {
      Application.showGame();
    };
    this.state.writeResult(points);
    renderScreen(this.view);
    this.state.reset();
  }
}


