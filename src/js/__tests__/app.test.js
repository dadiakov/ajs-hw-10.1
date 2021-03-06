import GameSavingLoader from '../gamesavingloader';
import GameSaving from '../gamesaving';

test('should return object', () => GameSavingLoader.load().then((data) => {
  expect(data).toEqual({
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1, name: 'Hitman', level: 10, points: 2000,
    },
  });
}));

test('should return object', () => GameSavingLoader.load()
  .then(() => new Promise((resolve, reject) => reject(new Error('Ошибка JSON файла'))))
  .catch((data) => {
    expect(data.message).toBe('Ошибка JSON файла');
  }));

test('gamesaving create object', () => {
  const save = new GameSaving();
  setTimeout(() => expect(save.save).toEqual({
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1, name: 'Hitman', level: 10, points: 2000,
    },
  }), 2000);
});
