import { nullRowAndColsInMatrix } from "./main";

const defaultMatrix = [
  [1, 1, 1, 1, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
];

const resultMatrix = [
  [1, 0, 1, 1, 1],
  [0, 0, 0, 0, 0],
  [1, 0, 1, 1, 1],
  [1, 0, 1, 1, 1],
  [1, 0, 1, 1, 1],
]
test("Обнуляет строку и столбец в матрице", () => {
  const setup = nullRowAndColsInMatrix(defaultMatrix);
  expect(setup).toEqual(resultMatrix);
});