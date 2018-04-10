export const compareResults = (otherResults, result) => {

  const allResults = otherResults.concat(result);

  /* сортируем массив с результатами всех игроков по кол-ву баллов */

  const sortedResults = allResults.sort((a, b) => b.points - a.points);

  const place = sortedResults.findIndex((player) => player.points === result.points) + 1;
  const percent = (allResults.length - place) / allResults.length * 100;
  const players = allResults.length;
  const notes = result.notes;
  const time = result.time;

  return {place, percent, players, notes, time};
};
