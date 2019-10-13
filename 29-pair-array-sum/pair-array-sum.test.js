import { findAllPairsInArrayEqualToNum } from "./main";

test("Пары в массиве равные числу", () => {
  const array = [ 3, 4, 5, -2, 10, 11, 12, -1, 0, 7, 6, 8 ];
  const equalTo = 10;

  const pairs = findAllPairsInArrayEqualToNum(array, 10);

  expect(pairs).toEqual(expect.arrayContaining(['7 + 3', '0 + 10', '-1 + 11']))
})