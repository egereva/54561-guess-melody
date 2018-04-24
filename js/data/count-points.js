const FAST_RESULT = 2;
const ERROR_RESULT = 2;
const GAMEOVER_RESULT = -1;

export const countPoints = (answers, notes) => {
  let sumPoints = 0;

  const countAnswers = answers.length;
  const slowGameResult = answers.filter((answer) => answer.correct && answer.speed >= 30).length;
  const fastGameResult = answers.filter((answer) => answer.correct && answer.speed < 30).length;
  const errorsResult = answers.filter((answer) => !answer.correct).length;

  if (countAnswers < 10 || notes < 0) {
    return GAMEOVER_RESULT;
  }

  sumPoints = (fastGameResult * FAST_RESULT) + slowGameResult - (errorsResult * ERROR_RESULT);

  return sumPoints;
};
