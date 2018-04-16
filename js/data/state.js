import {levels} from './levels';

export const state = {
  lastQuestions: Object.keys(levels).length,
  notes: 3,
  time: 300000,
  scores: 0,
  level: `level-0`,
  type: ``,
  status: `start`,
};
