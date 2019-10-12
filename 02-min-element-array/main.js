export function getMinElInSortedArray(array) {
  let start = 0;
  let end = array.length - 1;

  while (end - start > 1) {
    const middle = Math.round((end + start) / 2);
    console.log(middle);

    if (array[start] > array[middle]) {
      end = middle
    }
    
    if (array[middle] > array[end]) {
      start = middle;
    }
  }

  return array[end];
};


// const minElement = getMinElInSortedArray(array);

// console.log(minElement);