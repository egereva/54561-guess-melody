import AbstractView from './abstract-view';

export default class ErrorView extends AbstractView {
  constructor(error) {
    super();
    this.error = error;
  }

  get template() {
    return `
			<div class="error" style="color: red; text-align: center; font-size: 20px;">
			  <p>Ошибка: ${this.error.message}</p>
			</div>
			`;
  }
}
