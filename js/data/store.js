class GameStore {
  constructor() {
    this.initialState = Object.freeze({
      notes: 3,
      resultsPlayer: [],
      currentResult: [],
      displayQuestions: [],
      countScreens: 0,
      otherResults: [
        {points: 10, notes: 3, time: 10},
        {points: 15, notes: 3, time: 15},
        {points: 8, notes: 2, time: 12},
        {points: 6, notes: 1, time: 5}
      ],
      time: 80
    });
    this.currentState = Object.assign({}, this.initialState);
  }

  get notes() {
    return this.currentState.notes;
  }

  get resultsPlayer() {
    return this.currentState.resultsPlayer;
  }

  get countScreens() {
    return this.currentState.countScreens;
  }

  get otherResults() {
    return this.currentState.otherResults;
  }

  get currentResult() {
    return this.currentState.currentResult;
  }

  get displayQuestions() {
    return this.currentState.displayQuestions;
  }

  get time() {
    return this.currentState.time;
  }

  removeNote() {
    this.currentState.notes--;
    return this;
  }

  appendAnswer(answer) {
    this.currentState.resultsPlayer.push(answer);
    return this;
  }

  addScreen() {
    this.currentState.countScreens++;
    return this;
  }


  reset() {
    this.currentState = Object.assign({}, this.initialState);
    this.currentState.resultsPlayer = [];
    this.currentState.currentResult = [];
    this.currentState.displayQuestions = [];
    return this;
  }

  writeResult(result) {
    this.otherResults.push(result);
    return this;
  }

  addDisplayQuestions(question) {
    this.displayQuestions.push(question);
    return this;
  }

  tick() {
    this.currentState.time--;
    return this;
  }

}

const store = new GameStore();

export default store;
