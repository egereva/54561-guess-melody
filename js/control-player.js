export const controlPlayer = (html) => {

  const tracks = new Map();
  const players = html.element.querySelectorAll(`.player`);

  players.forEach((player) => {
    const audio = player.querySelector(`audio`);
    const control = player.querySelector(`.player-control`);
    tracks.set(control, audio);
  });

  const stopTracks = (evt) => tracks.forEach((audio, control) => {
    if (control !== evt.target && !audio.paused) {
      audio.pause();
      control.classList.toggle(`player-control--pause`, !audio.paused);
    }
  });

  tracks.forEach((audio, control) => {
    control.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      stopTracks(evt);
      if (!audio.paused) {
        audio.pause();
      } else {
        audio.play().catch(() => {});
      }
      control.classList.toggle(`player-control--pause`);
    });
  });
};
