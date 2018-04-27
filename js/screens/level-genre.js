import GenreView from './../view/genre-view';
import switchScreens from './../switch-screens';
import questions from './../data/questions';
import store from './../data/store';
import {renderScreen} from './../renders-screen';

const TIME = 60;

export default () => {
  const view = new GenreView(questions[store.currentState.questionGenreIndex], store);
  view.onClickAnswer = () => {
    if (Array.from(answersCheckbox).some((it) => it.checked)) {
      answerBtn.disabled = false;
    } else {
      answerBtn.disabled = true;
    }
  };
  view.onClickSubmit = (evt) => {
    evt.preventDefault();
    const arr = Array.from(answersCheckbox);
    const selectedAnswersIndex = arr.filter((it) => it.checked).map((it) => arr.indexOf(it) + 1);
    const rightAnswer = questions[store.currentState.questionGenreIndex].correct;
    const isRight = selectedAnswersIndex.every((elem) => rightAnswer.indexOf(elem) !== -1 && selectedAnswersIndex.length === rightAnswer.length);
    const currentAnswer = {};

    if (isRight) {
      currentAnswer.correct = true;
      currentAnswer.speed = TIME;
    } else {
      currentAnswer.correct = false;
      currentAnswer.speed = TIME;
      store.removeNote();
    }

    store.appendAnswer(currentAnswer);

    /* сброс формы и деактивация кнопки Ответить */
    view.resetForm();
    answerBtn.disabled = true;

    switchScreens();
  };
  const answersCheckbox = view.element.querySelectorAll(`input[type=checkbox]`);
  const answerBtn = view.element.querySelector(`.genre-answer-send`);
  answerBtn.disabled = true;
  view.controlPlayer();
  renderScreen(view);
};
