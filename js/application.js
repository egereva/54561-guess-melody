import WelcomeScreen from './screens/welcome';
import ResultScreen from './screens/result-screen';
import GameScreen from './screens/game';
import store from './data/store';
import DataLoad from './data/load-data';

const LEVELS = 10;

export default class Application {

  static showWelcome() {
    const welcome = new WelcomeScreen(store);
    welcome.createGameLevel();
  }

  static showGame() {
    GameScreen.switchScreen();
  }

  static showStats() {
    GameScreen.stopGame();
    const result = new ResultScreen(store);
    if (store.resultsPlayer.length === LEVELS) {
      DataLoad.saveResults(store.resultsPlayer).
          then(() => DataLoad.loadResult()).
          then((data) => result.showResult(data));
    } else {
      result.showResult();
    }

  }

}
