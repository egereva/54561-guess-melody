import {renderScreen} from './../renders-screen';
import questionsArtistScreen from './../screens/level-artist';
import WelcomeView from './../view/welcome-view';

export default () => {
  const welcome = new WelcomeView();
  welcome.startPlay = (evt) => {
    evt.preventDefault();
    questionsArtistScreen();
  };
  renderScreen(welcome);
};


