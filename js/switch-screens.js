import levelArtistScreen from './screens/level-artist';
import levelGenreScreen from './screens/level-genre';
import resultScreen from './screens/result-screen';
import {renderScreen} from './renders-screen';
import {getRandomQuestion} from "./random-question";
import {countPoints} from './data/count-points';
import store from './data/store';
import questions from './data/questions';

const LEVELS = 10;

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


const gameOver = (results, notes) => {
  const points = countPoints(results, notes);
  const currentPlayer = {};
  currentPlayer.points = points;
  currentPlayer.notes = notes;
  if (notes < 1) {
    renderScreen(resultScreen(store.otherResults, currentPlayer, RESULT_TEXT.notesover));
  } else {
    renderScreen(resultScreen(store.otherResults, currentPlayer, RESULT_TEXT.win));
  }
  store.writeResult(currentPlayer);
  store.reset();
};

export default () => {
  if (store.currentState.countScreens < LEVELS - 1 && store.currentState.notes > 0) {
    const screens = questions;
    const randomQuestion = getRandomQuestion(screens);
    if (randomQuestion.type === `artist`) {
      store.questionArtistIndex(screens.indexOf(randomQuestion));
      renderScreen(levelArtistScreen(randomQuestion));
    } else if (randomQuestion.type === `genre`) {
      store.questionGenreIndex(screens.indexOf(randomQuestion));
      renderScreen(levelGenreScreen(randomQuestion));
    }
    store.addScreen();
  } else {
    gameOver(store.resultsPlayer, store.notes);
  }
};
