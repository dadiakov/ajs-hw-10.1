/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve, reject) => {
      resolve(read());
    }).then((response) => new Promise((resolve, reject) => {
      resolve(json(response));
    }));
  }
}
