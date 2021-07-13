/* eslint-disable linebreak-style */
import GameSavingLoader from './gamesavingloader';

export default class GameSaving {
  constructor() {
    GameSavingLoader.load().then((data) => { this.save = data; });
  }
}
