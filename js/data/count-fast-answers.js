export const countFastAnswers = (answers) => {
  const fastAnswers = answers.filter((it) => it.speed < 30);
  return fastAnswers.length;
};
