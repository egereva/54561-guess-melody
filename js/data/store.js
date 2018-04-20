class GameStore {
  constructor() {
    this.initialState = Object.freeze({
      notes: 3,
      resultsPlayer: [],
      currentResult: [],
      countScreens: 0,
      questionArtistIndex: 0,
      questionGenreIndex: 0,
      otherResults: [
        {points: 10, notes: 3, time: 10},
        {points: 15, notes: 3, time: 15},
        {points: 8, notes: 2, time: 12},
        {points: 6, notes: 1, time: 5}
      ],
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

  get otherResults() {
    return this.currentState.otherResults;
  }

  get currentResult() {
    return this.currentState.currentResult;
  }
  get questionArtistIndex() {
    return this.currentState.questionArtistIndex;
  }
  get questionGenreIndex() {
    return this.currentState.questionGenreIndex;
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
    this.otherResults.push(result);
    return this;
  }

  questionArtistIndex(index) {
    this.currentState.questionArtistIndex = index;
    return this;
  }

  questionGenreIndex(index) {
    this.currentState.questionGenreIndex = index;
    return this;
  }

}

const store = new GameStore();

export default store;
