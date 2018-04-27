import ArtistView from './../view/artist-view';
import switchScreens from './../switch-screens';
import questionsArtist from './../data/questions';
import store from './../data/store';
import {renderScreen} from './../renders-screen';


const TIME = 60;

export default () => {
  const view = new ArtistView(questionsArtist[store.currentState.questionArtistIndex], store);
  view.onClickAnswer = (evt) => {
    const selectedAnswerIndex = evt.currentTarget.parentNode.querySelector(`input`).value.substr(-1);
    const currentAnswer = {};
    if (Number(selectedAnswerIndex) === questionsArtist[store.currentState.questionArtistIndex].correct) {
      currentAnswer.correct = true;
      currentAnswer.speed = TIME;
    } else {
      currentAnswer.correct = false;
      currentAnswer.speed = TIME;
      store.removeNote();
    }
    store.appendAnswer(currentAnswer);
    switchScreens();
  };
  view.controlPlayer();
  renderScreen(view);
};
