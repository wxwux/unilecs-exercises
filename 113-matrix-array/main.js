export const initMatrix = size => {
  const matrix = [];
  let diagonalCounter = 0;

  for (let i = 0; i < size; i++) {
    const matrixRow = [];

    for (let j = 0; j < size; j++) {
      matrixRow.push(j > diagonalCounter ? 1 : -1);
    }

    matrixRow[diagonalCounter++] = 0;
    matrix.push(matrixRow);
  }

  return matrix;
};