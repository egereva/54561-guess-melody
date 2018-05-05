import {compareResults} from './compare-results';

export const getResult = (allResults, result) => {
  const playerStatistic = compareResults(allResults, result);

  const ResultTimeoverMessage = `Время вышло! Вы не успели отгадать все мелодии`;
  const ResultNotesoverMessage = `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;
  const ResultMessage = `Вы заняли ${playerStatistic.place} место из ${playerStatistic.players}. Это лучше чем у ${playerStatistic.percent.toFixed()}% игроков`;

  if (playerStatistic.time <= 0) {
    return ResultTimeoverMessage;
  }

  if (playerStatistic.notes <= 0) {
    return ResultNotesoverMessage;
  }

  return ResultMessage;
};

