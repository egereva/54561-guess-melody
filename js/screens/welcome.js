import {renderScreen} from './../renders-screen';
import Application from './../application';
import WelcomeView from './../view/welcome-view';
import DataLoad from './../data/load-data';
import LoaderView from './../view/loader-view';

export default class WelcomeScreen {
  constructor(state) {
    this.state = state;
    this.view = new WelcomeView();
    this.loader = new LoaderView();
  }

  createGameLevel() {
    this.view.startPlay = (evt) => {
      evt.preventDefault();
      Application.showGame();
    };
    const item = this.view.element.querySelector(`.main`);
    this.view.element.insertBefore(this.loader.element, item);
    this.view.disablePlayButton();
    DataLoad.loadQuestions().then((data) => this.loader.preloadAudio(data)).then(() => this.view.activePlayButton());
    renderScreen(this.view);
  }

}


