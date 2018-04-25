export const getRandomQuestion = (screen) => {
  const randomIndex = Math.floor(Math.random() * screen.length);
  return screen[randomIndex];
};

