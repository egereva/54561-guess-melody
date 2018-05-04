import WelcomeScreen from './screens/welcome';
import ResultScreen from './screens/result-screen';
import GameScreen from './screens/game';
import store from './data/store';


export default class Application {

  static showWelcome() {
    const welcome = new WelcomeScreen(store);
    welcome.createGameLevel();
  }

  static showGame() {
    GameScreen.switchScreen();
  }

  static showStats() {
    const result = new ResultScreen(store);
    result.showResult();
    GameScreen.stopGame();
  }

}
