export const setPauseAndPlay = (btn, audio) => {
  btn.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    const element = evt.currentTarget;
    if (element.classList.contains(`player-control--pause`)) {
      element.classList.remove(`player-control--pause`);
      audio.pause();
    } else {
      element.classList.add(`player-control--pause`);
      audio.play();
    }
  });
};
