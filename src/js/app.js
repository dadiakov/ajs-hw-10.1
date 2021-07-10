import GameSavingLoader from "./gamesaving";

GameSavingLoader.load().then(response => console.log(response), error => console.log(error));