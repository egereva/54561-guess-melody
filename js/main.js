const template = document.querySelector(`#templates`);
const screens = [
  template.content.querySelector(`.main--welcome`),
  template.content.querySelector(`.main--level-artist`),
  template.content.querySelector(`.main--level-genre`),
  template.content.querySelectorAll(`.main--result`)[0],
  template.content.querySelectorAll(`.main--result`)[1],
  template.content.querySelectorAll(`.main--result`)[2]
];
const ToLeftKeycode = 37;
const ToRightKeycode = 39;
const mainScreenSection = document.querySelector(`.main`);

let currentScreenIndex = 0;

/*показываем экран из массива screens по номеру num*/

const renderScreen = (num) => {

  mainScreenSection.innerHTML = ``;

  const mainScreen = screens[num];
  mainScreenSection.appendChild(mainScreen);

  return mainScreen;
};

/*переключаем экраны по нажатию на комбинации Alt + ← и Alt + →*/

const toggleScreenKeydown = (event) => {
  if (event.keyCode === ToLeftKeycode && event.altKey) {
    currentScreenIndex = currentScreenIndex === 0 ? screens.length - 1 : currentScreenIndex - 1;
    renderScreen(currentScreenIndex);
  }
  if (event.keyCode === ToRightKeycode && event.altKey) {
    currentScreenIndex = currentScreenIndex < screens.length - 1 ? currentScreenIndex + 1 : 0;
    renderScreen(currentScreenIndex);
  }
};

renderScreen(currentScreenIndex);

document.addEventListener(`keydown`, toggleScreenKeydown);
