export const countingSort = (arr, maxInt) => {
  let countingObj = Array(maxInt).fill(0);
  let result = [];

  arr.forEach(item => (countingObj[item] = ++countingObj[item]));

  countingObj.forEach((times, ndx) => {
    for (let i = 0; i < times; i++) {
      result.push(ndx);
    }
  });

  return result;
};
