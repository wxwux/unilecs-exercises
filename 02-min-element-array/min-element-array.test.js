import { getMinElInSortedArray } from "./main";

test("Минимальный элемент в массиве", () => {
  const array = [4, 5, 6, 7, 8, 9, 1, 2, 3];
  const minElement = getMinElInSortedArray(array);

  expect(minElement).toBe(1);
});
