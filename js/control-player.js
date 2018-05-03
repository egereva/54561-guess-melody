export const controlPlayer = (html) => {

  const myMap = new Map();
  const players = html.element.querySelectorAll(`.player`);

  players.forEach((player) => {
    const audio = player.querySelector(`audio`);
    const control = player.querySelector(`.player-control`);
    myMap.set(control, audio);
  });

  const stopTracks = (evt) => myMap.forEach((audio, control) => {
    if (control !== evt.target && !audio.paused) {
      audio.pause();
      control.classList.toggle(`player-control--pause`, !audio.paused);
    }
  });

  myMap.forEach((audio, control) => {
    control.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      stopTracks(evt);
      if (!audio.paused) {
        audio.pause();
      } else {
        audio.play();
      }
      control.classList.toggle(`player-control--pause`);
    });
  });
};
