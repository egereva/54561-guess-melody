const FAIL = 2;

export default (prevState, isCorrect, isFast) => {
  let {questions, notes, scores, status} = prevState;

  questions--;

  if (isCorrect) {
    scores++;
    if (isFast) {
      scores++;
    }
  } else {
    scores -= FAIL;
    notes--;
  }

  if (notes < 1) {
    status = `fail`;
  }

  if (questions === 0 && notes >= 1) {
    status = `win`;
  }

  return {questions, notes, scores, status};
};
