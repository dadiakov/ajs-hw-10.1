/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  static load() {
    return read()
      .then((response) => json(response))
      .then((data) => JSON.parse(data))
      .catch((err) => console.error(err));
  }
}
