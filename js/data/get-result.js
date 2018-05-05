import {compareResults} from './compare-results';

export const getResult = (allResults, result) => {
  const playerStatistic = compareResults(allResults, result);

  const resultTimeoverMessage = `Время вышло! Вы не успели отгадать все мелодии`;
  const resultNotesoverMessage = `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;
  const resultMessage = `Вы заняли ${playerStatistic.place} место из ${playerStatistic.players}. Это лучше чем у ${playerStatistic.percent.toFixed()}% игроков`;

  if (playerStatistic.time <= 0) {
    return resultTimeoverMessage;
  }

  if (playerStatistic.notes <= 0) {
    return resultNotesoverMessage;
  }

  return resultMessage;
};

