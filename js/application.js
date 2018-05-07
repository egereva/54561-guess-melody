import WelcomeScreen from './screens/welcome';
import FinalScreen from './screens/result-screen';
import GameScreen from './screens/game';
import store from './data/store';
import DataService from './data/load-data';
import {LEVELS} from './data/game-options';

export default class Application {

  static showWelcome() {
    const welcome = new WelcomeScreen(store);
    welcome.createGameLevel();
  }

  static showGame() {
    GameScreen.switchScreen();
  }

  static showStats() {
    GameScreen.stopRound();
    const result = new FinalScreen(store);
    if (store.resultsPlayer.length === LEVELS) {
      DataService.saveResults(store.resultsPlayer).
          then(() => DataService.loadResult()).
          then((data) => result.showResult(data));
    } else {
      result.showResult();
    }

  }

}
