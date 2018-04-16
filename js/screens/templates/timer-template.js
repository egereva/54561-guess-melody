const MS = 1000;
const SEC = 60;

export const getMinutes = (time) => {
  const allSeconds = time / MS;
  const minutes = Math.trunc(allSeconds / SEC).toString();

  return minutes.length > 1 ? minutes : `0${minutes}`;
};

export const getSeconds = (time) => {
  const allSeconds = time / MS;
  const minutes = Math.trunc(allSeconds / SEC);
  const seconds = Math.trunc(allSeconds - minutes * SEC).toString();

  return seconds.length > 1 ? seconds : `0${seconds}`;
};

export const getTimerTemplate = (state) => `<svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
  <circle
    cx="390" cy="390" r="370"
    class="timer-line"
    style="filter: url(..#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center">
  </circle>
</svg>
<div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">
  <span class="timer-value-mins">${getMinutes(state.time)}</span><!--
  --><span class="timer-value-dots">:</span><!--
  --><span class="timer-value-secs">${getSeconds(state.time)}</span>
</div>`;
