export const compareResults = (allResults, result) => {

  const statistic = allResults.concat(result);

  /* сортируем массив с результатами всех игроков по кол-ву баллов */

  const sortedResults = statistic.sort((a, b) => b.points - a.points);

  const place = sortedResults.findIndex((player) => player.points === result.points) + 1;
  const percent = (statistic .length - place) / statistic .length * 100;
  const players = statistic .length;
  const notes = result.notes;
  const time = result.time;

  return {place, percent, players, notes, time};
};
