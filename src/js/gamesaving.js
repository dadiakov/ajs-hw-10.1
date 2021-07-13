/* eslint-disable linebreak-style */
import GameSavingLoader from './gamesavingloader';

export default class GameSaving {
  constructor() {
    this.save = GameSavingLoader.load().then((data) => { this.save = data; });
  }
}
