import resultScreen from './screens/result-screen';
import {getRandomQuestion} from './random-question';
import store from './data/store';
import questions from './data/questions';
import questionsArtistScreen from './screens/level-artist';
import questionsGenreScreen from './screens/level-genre';

const LEVELS = 10;


export default () => {
  if (store.currentState.countScreens < LEVELS - 1 && store.currentState.notes > 0) {
    const screens = questions;
    const displayQuestions = store.currentState.displayQuestions;
    let randomQuestion = getRandomQuestion(screens);

    while (displayQuestions.includes(randomQuestion)) {
      randomQuestion = getRandomQuestion(screens);
    }
    if (randomQuestion.type === `artist`) {
      store.questionArtistIndex(screens.indexOf(randomQuestion));
      questionsArtistScreen();
    } else if (randomQuestion.type === `genre`) {
      store.questionGenreIndex(screens.indexOf(randomQuestion));
      questionsGenreScreen();
    }
    store.addScreen();
    store.addDisplayQuestions(randomQuestion);
  } else {
    resultScreen();
    store.reset();
  }
};
