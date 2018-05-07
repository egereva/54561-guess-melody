import ErrorView from './../view/error-view';
import {renderScreen} from './../renders-screen';
import store from './../data/store';
import {checkResponse} from './../helpers';

const SERVER_URL = `https://es.dump.academy/guess-melody`;
const APP_ID = 54561;

class DataService {
  constructor(state) {
    this.questions = [];
    this.state = state;
  }

  loadQuestions() {
    return fetch(`${SERVER_URL}/questions`).
        then(checkResponse).
        then((response) => response.json()).
        then((data) => {
          this.questions = data;
          return this.questions;
        }).
        catch((error) => this.getError(error));
  }

  getNextQuestion() {
    return this.questions[this.state.countScreens];
  }

  loadResult() {
    return fetch(`${SERVER_URL}/stats/${APP_ID}`).
        then(checkResponse).
        then((response) => response.json());
  }

  saveResults(data) {
    const requestSettings = {
      method: `POST`,
      body: JSON.stringify(data),
      headers: {
        'Content-Type': `application/json`
      }
    };
    return fetch(`${SERVER_URL}/stats/${APP_ID}`, requestSettings).then(checkResponse);
  }

  getError(error) {
    const errorView = new ErrorView(error);
    renderScreen(errorView);
  }
}


const dataService = new DataService(store);

export default dataService;
