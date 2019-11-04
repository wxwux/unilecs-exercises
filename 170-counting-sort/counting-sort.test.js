import { countingSort } from "./main";

test("Сортирует массив", () => {
  const startArray = [4, 5, 2, 2, 8, 9, 8, 2, 1, 4, 1, 4, 9];
  const resultArray = [1, 1, 2, 2, 2, 4, 4, 4, 5, 8, 8, 9, 9];

  expect(countingSort(startArray, 10)).toStrictEqual(resultArray);
});
