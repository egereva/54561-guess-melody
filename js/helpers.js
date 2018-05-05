const NOTES = 3;

export const formatTime = (value) => value < 10 ? `0` + value : value;

export const formatMin = (current, initial) => {
  const getMin = formatTime(Math.trunc((initial / 60) - (current / 60)));
  switch (getMin) {
    case `00`:
      return `${getMin} минут`;
    case `01`:
      return `${getMin} минуту`;
    default:
      return `${getMin} минуты`;
  }
};

export const formatSec = (current, initial) => {
  const getSec = formatTime((initial - current) % 60);
  const lastSymbol = String(getSec).substr(-1);
  if (lastSymbol === `1`) {
    return `${getSec} секунду`;
  }
  if (lastSymbol > `1` && lastSymbol < `5`) {
    return `${getSec} секунды`;
  }
  return `${getSec} секунд`;
};


export const formatErrors = (notes) => {
  const countErrors = NOTES - notes;
  switch (countErrors) {
    case 0:
      return `${countErrors} ошибок`;
    case 1:
      return `${countErrors} ошибку`;
    default:
      return `${countErrors} ошибки`;
  }
};

export const checkResponse = (response) => {
  if (response.ok) {
    return response;
  }
  throw new Error(`${response.status} ${response.statusText} `);

};
