import {findBestTransaction} from './main';

test("Возвращает успешную сделку", () => {
  const days = [9, 6, 13, 10, 20, 2];
  const bestTransaction = findBestTransaction(days);

  expect(bestTransaction).toBe(14);
});

test("Возвращает сделку с меньшими потерями", () => {
  const days = [20, 11, 10, 8, 5, 2];
  const bestTransaction = findBestTransaction(days);

  expect(bestTransaction).toBe(-1);
});