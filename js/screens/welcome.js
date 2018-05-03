import {renderScreen} from './../renders-screen';
import Application from './../application';
import WelcomeView from './../view/welcome-view';

export default class WelcomeScreen {
  constructor(state) {
    this.state = state;
    this.view = new WelcomeView(this.state);
  }

  createGameLevel() {
    this.view.startPlay = (evt) => {
      evt.preventDefault();
      Application.showGame();
    };
    renderScreen(this.view);
  }

}


