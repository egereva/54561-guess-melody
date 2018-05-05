class GameStore {
  constructor() {
    this.initialState = Object.freeze({
      notes: 3,
      resultsPlayer: [],
      currentResult: [],
      countScreens: 0,
      allResults: [],
      time: 300
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

  get allResults() {
    return this.currentState.allResults;
  }

  get currentResult() {
    return this.currentState.currentResult;
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
    return this;
  }

  writeResult(result) {
    this.allResults.push(result);
    return this;
  }


  tick() {
    this.currentState.time--;
    return this;
  }

}

const store = new GameStore();

export default store;
