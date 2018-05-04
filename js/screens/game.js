import {renderScreen} from './../renders-screen';
import {controlPlayer} from './../control-player';
import Application from './../application';
import store from './../data/store';
import HeaderView from './../view/header-view';
import GenreView from './../view/genre-view';
import ArtistView from './../view/artist-view';
import QuestionLoad from './../data/load-questions';

const LEVELS = 10;


class GameScreen {
  constructor(state) {
    this.state = state;
    this.answerTime = 0;
    this.header = new HeaderView(this.state);
    this._interval = null;
  }

  getQuestionType() {
    if (this.state.currentQuestion.type === `artist`) {
      this.view = new ArtistView(this.state);
      this.renderArtistLevel();
    }
    if (this.state.currentQuestion.type === `genre`) {
      this.view = new GenreView(this.state);
      this.renderGenreLevel();
    }
    this.view.element.appendChild(this.header.element);
    this.header.updateNotes();
  }


  init() {
    this.getQuestionType();
    this.loadInterval();
    controlPlayer(this.view);
    renderScreen(this.view);
  }

  renderArtistLevel() {
    this.view.onClickAnswer = (evt) => {
      evt.preventDefault();
      this.checkArtistAnswer(evt, this.answerTime);
      this.answerTime = 0;
      this.switchScreen();
    };
  }

  renderGenreLevel() {
    this.view.onClickAnswer = () => {
      this.isAnswerSelected();
    };
    this.view.onClickSubmit = (evt) => {
      evt.preventDefault();
      this.checkGenreAnswer(evt, this.answerTime);
      this.answerTime = 0;
      this.switchScreen();
    };

  }

  loadInterval() {
    this.header.updateTime();
    if (this._interval === null) {
      this._interval = setInterval(() => {
        if (this.state.time <= 0) {
          Application.showStats();
        }
        this.state.tick();
        this.answerTime++;
        this.header.updateTime();
      }, 1000);
    }
  }

  isAnswerSelected() {
    const answersCheckbox = this.view.element.querySelectorAll(`input[type=checkbox]`);
    const answerBtn = this.view.element.querySelector(`.genre-answer-send`);
    let isSubmitEnabled = Array.from(answersCheckbox).some((it) => it.checked);
    answerBtn.disabled = !isSubmitEnabled;
  }

  checkArtistAnswer(evt, answerTime) {
    const answers = this.state.currentQuestion.answers;
    const correctAnswer = answers.filter((answer) => answer.isCorrect).map((answer) => answers.indexOf(answer) + 1).join(``);
    const selectedAnswerIndex = evt.currentTarget.parentNode.querySelector(`input`).value.substr(-1);
    const currentAnswer = {};
    if (selectedAnswerIndex === correctAnswer) {
      currentAnswer.correct = true;
      currentAnswer.speed = answerTime;
    } else {
      currentAnswer.correct = false;
      currentAnswer.speed = answerTime;
      this.state.removeNote();
    }
    this.state.appendAnswer(currentAnswer);
  }

  checkGenreAnswer(answerTime) {
    const answers = this.state.currentQuestion.answers;
    const genreQuestion = this.state.currentQuestion.genre;
    const correctAnswers = answers.filter((answer) => answer.genre === genreQuestion).map((it) => answers.indexOf(it) + 1);
    const answersCheckbox = this.view.element.querySelectorAll(`input[type=checkbox]`);
    const arr = Array.from(answersCheckbox);
    const answerBtn = this.view.element.querySelector(`.genre-answer-send`);
    const selectedAnswersIndex = arr.filter((it) => it.checked).map((it) => arr.indexOf(it) + 1);
    const isRight = selectedAnswersIndex.every((elem) => correctAnswers.indexOf(elem) !== -1);
    const currentAnswer = {};

    if (isRight && selectedAnswersIndex.length === correctAnswers.length) {
      currentAnswer.correct = true;
      currentAnswer.speed = answerTime;
    } else {
      currentAnswer.correct = false;
      currentAnswer.speed = answerTime;
      this.state.removeNote();
    }

    this.state.appendAnswer(currentAnswer);

    this.view.resetForm();
    answerBtn.disabled = true;
  }

  stopGame() {
    clearInterval(this._interval);
    this._interval = null;
  }

  switchScreen() {
    if (this.state.countScreens < LEVELS && this.state.notes > 0) {
      QuestionLoad.getNextQuestion().then((data) => {
        this.state.currentQuestion = data;
        this.state.addScreen();
        this.init();

      });
    } else {
      Application.showStats();
    }
  }

}

const game = new GameScreen(store);

export default game;
