import AbstractView from './../view/abstract-view';

export default class LoaderView extends AbstractView {
  constructor() {
    super();
    this.tracks = [];
    this.loadedTracks = 0;
  }

  get template() {
    return `
      <div class="loader" style="text-align: center; color: green; font-weight: bold;">
        <p>Загрузка аудио файлов...</p>
      </div>
      `;
  }

  bind() {
    this.textLoader = this.element.querySelector(`.loader p`);
  }

  _addTrack(answer) {
    const audio = new Audio();
    audio.src = answer.src;
    this.tracks.push(audio);
  }

  _sortTracks(data) {
    for (const answer of data) {
      if (answer.type === `artist`) {
        this._addTrack(answer);
      }
      if (answer.type === `genre`) {
        answer.answers.forEach((item) => {
          this._addTrack(item);
        });
      }
    }
  }

  preloadAudio(data) {
    return new Promise((resolve) => {

      this._sortTracks(data);
      this.tracks.forEach((item) => {
        item.addEventListener(`canplaythrough`, () => {
          this.loadedTracks++;
          if (this.loadedTracks === this.tracks.length) {
            this.textLoader.textContent = ``;
            resolve();
          }
        });
      });
    });
  }

}
