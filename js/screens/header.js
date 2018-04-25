const NOTES = 3;

export default (state) => {
  return `<div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">
    <span class="timer-value-mins">${Math.trunc(state.time / 60)}</span><!--
    --><span class="timer-value-dots">:</span><!--
    --><span class="timer-value-secs">${(state.time % 60)}</span>
  </div>
  <div class="main-mistakes">
    ${new Array(NOTES - state.notes).fill(`<img class="main-mistake" src="img/wrong-answer.png" width="35" height="49">`).join(``)}
  </div>`;
};
