// QQ: Find all reverse pairs -
// A reverse pair is a pair (i, j) where 0 <= i < j < nums.length and nums[i] > 2 * nums[j].
// input: [2,4,3,5,1]
// Approach mergeSort

let input = [2, 4, 3, 5, 1];

const merge = (left, right) => {
  let teamp = [];

  while (left.length && right.length) {
    let el = 0;
    if (left[0] < right[0]) {
      el = left.shift();
    } else {
      el = right.shift();
    }

    temp.push(el);
  }

  return [...temp, ...left, ...right];
}

const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  const half = Math.floor(arr.length / 2);

  let left = mergeSort(arr.slice(0, half));
  let right = mergeSort(arr);

  return merge(left, right);
}

console.log(mergeSort(input))