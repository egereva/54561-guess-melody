const mainScreen = document.querySelector(`.main`);

export const renderScreen = (screen) => {
  mainScreen.innerHTML = ``;
  mainScreen.appendChild(screen.element);

};
