const NOTES = 3;

export const getErrorTemplate = (state) => {
  const errors = `<img class="main-mistake" src="img/wrong-answer.png" width="35" height="49">`;

  return `
    <div class="main-mistakes">
      ${errors.repeat(NOTES - state.notes)}
    </div>
`;
};


