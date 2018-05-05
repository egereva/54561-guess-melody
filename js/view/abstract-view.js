import {getElementFromTemplate} from '../get-element-from-template';

export default class AbstractView {
  constructor() {
    if (new.target === AbstractView) {
      throw new Error(`Can't instantiate AbstractView`);
    }
  }

  get template() {
    throw new Error(`template is required`);
  }

  get element() {
    if (!this._element) {
      this._element = this.renderView();
      this.bind();
    }
    return this._element;
  }

  renderView() {
    return getElementFromTemplate(this.template);
  }

  bind() {}
}
