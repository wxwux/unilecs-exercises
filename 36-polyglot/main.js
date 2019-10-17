export const countSetsCrossing = (n, sets) => {
  let substraction = 0;
  for (let i = 0; i < sets.length; i++) {
    substraction += n - sets[i];
  }
  return n - substraction;
};
