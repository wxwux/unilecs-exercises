export function findAllPairsInArrayEqualToNum(array, equalTo) {
  let hashMap = {};
  const result = [];

  for (let i = 0; i < array.length; i++) {
    let sub = equalTo - array[i]; 

    if (hashMap.hasOwnProperty(sub)) {
      const resultPairs = `${hashMap[sub]} + ${sub}`;
      result.push(resultPairs);
    } else {
      hashMap[array[i]] = sub;
    }
  }

  return result;
}
