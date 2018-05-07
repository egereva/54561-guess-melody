const app = document.querySelector(`.app`);

export const renderScreen = (screen) => {
  app.innerHTML = ``;
  app.appendChild(screen.element);

};
