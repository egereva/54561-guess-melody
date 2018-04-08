import {compareResults} from './compare-results';

export const getResult = (otherResults, result) => {
  const playerStatistic = compareResults(otherResults, result);

  const RESULT_TIMEOVER_MESSAGE = `Время вышло! Вы не успели отгадать все мелодии`;
  const RESULT_NOTESOVER_MESSAGE = `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;
  const RESULT_MESSAGE = `Вы заняли ${playerStatistic.place} место из ${playerStatistic.players}. Это лучше чем у ${playerStatistic.percent}% игроков`;

  if (playerStatistic.time <= 0) {
    return RESULT_TIMEOVER_MESSAGE;
  }

  if (playerStatistic.notes <= 0) {
    return RESULT_NOTESOVER_MESSAGE;
  }

  return RESULT_MESSAGE;
};
