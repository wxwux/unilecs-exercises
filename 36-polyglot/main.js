export const countSetsCrossing = (n, sets) => {
  return n - (n - sets[0]) - (n - sets[1]) - (n - sets[2]) - (n - sets[3]);
};
