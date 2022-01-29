let _ = require("lodash");

function merge (left, right) {
  let arr = []
  // Break out of loop if any one of the array gets empty
  while (left.length && right.length) {
    // Pick the smaller among the smallest element of left and right sub arrays 
    if (left[0] < right[0]) {
      arr.push(left.shift())
    } else {
      arr.push(right.shift())
    }
  }

  // Concatenating the leftover elements
  // (in case we didn't go through the entire left or right array)
  return [...arr, ...left, ...right]
}

function mergeSort (array) {
  // Base case or terminating case
  if (array.length <= 1) {
    return array
  }

  const half = Math.floor(array.length / 2);

  const left = array.splice(0, half);
  const right = array;
  return merge(mergeSort(left), mergeSort(array))
}

function callMergeSort () {
  let arr = [4, 8, 7, 2, 11, 1, 3];
  arr = mergeSort(arr);

  console.log(arr);
}


callMergeSort();
