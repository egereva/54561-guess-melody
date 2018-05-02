import {renderScreen} from './../renders-screen';
import welcomeScreen from './welcome';
import store from './../data/store';
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

export default () => {
  const points = countPoints(store.resultsPlayer, store.notes);
  const currentPlayer = {};
  currentPlayer.points = points;
  currentPlayer.notes = store.notes;
  const templateResult = currentPlayer.notes <= 0 ? RESULT_TEXT.notesover : RESULT_TEXT.win;
  const view = new ResultView(store.otherResults, currentPlayer, templateResult);
  view.onClickReplay = () => {
    welcomeScreen();
  };
  store.writeResult(points);
  renderScreen(view);
};
