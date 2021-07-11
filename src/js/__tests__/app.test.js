import GameSavingLoader from '../gamesaving';

test('should return object', () => GameSavingLoader.load().then((data) => {
  expect(data).toEqual('{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}');
}));

// eslint-disable-next-line prefer-promise-reject-errors
test('should return object', () => GameSavingLoader.load().then(() => Promise.reject('Ошибочка')).catch((data) => {
  expect(data).toBe('Ошибочка');
}));
