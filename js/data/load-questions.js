import ErrorView from './../view/error-view';
import {renderScreen} from './../renders-screen';
import store from './../data/store';

class QuestionLoad {
  constructor() {
    this.questions = [];
  }

  getNextQuestion() {
    if (!this.questions.length) {
      return fetch(`https://es.dump.academy/guess-melody/questions`).
          then((response) => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error(`${response.status} ${response.statusText} `);
            }
          }).
          then((data) => {
            this.questions = data;
            return this.questions[store.countScreens];
          }).
          catch((error) => this.getError(error));
    }
    const nextQuestion = this.questions[store.countScreens];

    return Promise.resolve(nextQuestion);
  }

  getError(error) {
    const errorView = new ErrorView(error);
    renderScreen(errorView);
  }

}


const load = new QuestionLoad();

export default load;
