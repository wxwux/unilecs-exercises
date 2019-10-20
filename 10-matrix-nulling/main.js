export const nullRowAndColsInMatrix = matrix => {
  let colNumberToClear = 0;
  let rowNumberToClear = 0;
  const clearRow = cell => 0;
  const clearRequiredCol = (currentCell, currentCellNdx) => {
    return currentCellNdx === colNumberToClear ? 0 : currentCell;
  }
    

  matrix.forEach((row, rowNdx) => {
    row.forEach((cell, collNdx) => {
      if (cell === 0) {
        colNumberToClear = collNdx;
        rowNumberToClear = rowNdx;
      }
    });
  });

  return matrix.map((currentRow, currentRowNdx) => {
    if (currentRowNdx === rowNumberToClear) {
      return currentRow.map(clearRow);
    } else {
      return currentRow.map(clearRequiredCol);
    }
  });
};

const defaultMatrix = [
  [1, 1, 1, 1, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1]
];

const test = nullRowAndColsInMatrix(defaultMatrix); //?
