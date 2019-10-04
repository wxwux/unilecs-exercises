export function checkUniqString(string) {
  const reducer = (checkedString, currentLetter) =>
    checkedString.length && checkedString.indexOf(currentLetter) !== -1
      ? false
      : checkedString + currentLetter;

  const isOnlyUniques = string.split("").reduce(reducer);

  return isOnlyUniques.length ? true : false; 
}
