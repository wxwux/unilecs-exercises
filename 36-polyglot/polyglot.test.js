import { countSetsCrossing } from "./main";

test("Возвращает минимальное общее кол-во", () => {
  const n = 100;
  const sets = [70, 75, 80, 85];
  const setsCrossing = countSetsCrossing(n, sets);

  expect(setsCrossing).toEqual(10);
})