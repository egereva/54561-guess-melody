import {renderScreen} from './../renders-screen';
import Application from './../application';
import ResultView from './../view/result-view';
import {countPoints} from './../data/count-points';

const RESULT_TEXT = {
  win: {
    h2: `Вы настоящий меломан!`,
    button: `Сыграть ещё раз`
  },
  notesover: {
    h2: `Какая жалость!`,
    button: `Попробовать ещё раз`
  },
  timeover: {
    h2: `Увы и ах!`,
    button: `Попробовать ещё раз`
  }
};

export default class ResultScreen {
  constructor(state) {
    this.state = state;
  }

  showResult() {
    const points = countPoints(this.state.resultsPlayer, this.state.notes, this.state.time);
    const currentPlayer = {};
    currentPlayer.points = points;
    currentPlayer.notes = this.state.notes;
    currentPlayer.time = this.state.time;
    let templateResult;
    if (currentPlayer.time <= 0) {
      templateResult = RESULT_TEXT.timeover;
    } else if (currentPlayer.notes <= 0) {
      templateResult = RESULT_TEXT.notesover;
    } else {
      templateResult = RESULT_TEXT.win;
    }
    this.view = new ResultView(this.state.otherResults, currentPlayer, templateResult);
    this.view.onClickReplay = () => {
      Application.showGame();
    };
    this.state.writeResult(points);
    renderScreen(this.view);
    this.state.reset();
  }
}


