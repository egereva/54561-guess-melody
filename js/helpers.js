import {NOTES} from './data/game-options';

export const formatTime = (value) => value < 10 ? `0` + value : value;

export const formatMin = (current, initial) => {
  const getMin = Math.trunc((initial / 60) - (current / 60));
  const number1 = Math.abs(getMin) % 100;
  const number2 = number1 % 10;
  if (number1 > 10 && number1 < 20) {
    return `${getMin} минут`;
  }
  if (number2 > 1 && number2 < 5) {
    return `${getMin} минуты`;
  }
  if (number2 === 1) {
    return `${getMin} минуту`;
  }
  return `${getMin} минут`;
};

export const formatSec = (current, initial) => {
  const getSec = (initial - current) % 60;
  const number1 = Math.abs(getSec) % 100;
  const number2 = number1 % 10;
  if (number1 > 10 && number1 < 20) {
    return `${getSec} секунд`;
  }
  if (number2 > 1 && number2 < 5) {
    return `${getSec} секунды`;
  }
  if (number2 === 1) {
    return `${getSec} секунду`;
  }
  return `${getSec} секунд`;
};


export const formatErrors = (notes) => {
  const countErrors = NOTES - notes;
  const number1 = Math.abs(countErrors) % 100;
  const number2 = number1 % 10;
  if (number1 > 10 && number1 < 20) {
    return `${countErrors} ошибок`;
  }
  if (number2 > 1 && number2 < 5) {
    return `${countErrors} ошибки`;
  }
  if (number2 === 1) {
    return `${countErrors} ошибку`;
  }
  return `${countErrors} ошибок`;
};

export const checkResponse = (response) => {
  if (response.ok) {
    return response;
  }
  throw new Error(`${response.status} ${response.statusText} `);

};
