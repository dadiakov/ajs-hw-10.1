/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve, reject) => {
      resolve(read());
    }).then((response) => new Promise((resolve, reject) => {
      resolve(json(response));
    // eslint-disable-next-line no-console
    })).catch((error) => console.log(error.message));
  }
}
