import { initMatrix } from "./main";

test("Создание матрицы", () => {
  const matrix = initMatrix(5);
  const matrixSnapshot = [
    [0, 1, 1, 1, 1],
    [-1, 0, 1, 1, 1],
    [-1, -1, 0, 1, 1],
    [-1, -1, -1, 0, 1],
    [-1, -1, -1, -1, 0]
  ]
  expect(matrix).toEqual(matrixSnapshot);
});
