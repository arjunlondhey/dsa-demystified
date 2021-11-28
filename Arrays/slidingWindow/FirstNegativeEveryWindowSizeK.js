//Date: 2021-11-28
//Question2: First negative integer in every window size K

console.log(firstNegativeInWindowSizeK([12, -1, -7, 8, -15, 30, 16, 28], 3));
console.log(firstNegativeInWindowSizeK([1, 2, 3], 5)); // 0
console.log(firstNegativeInWindowSizeK([1, 2, 3, 1, 2, 2, 9, -2, 8], 3)); // 15

function firstNegativeInWindowSizeK (arr, K) {
  let min = [],
    ans = [];

  if (arr.length < K) {
    return 0;
  }

  // setting up window size of K
  for (let i = 0; i < K; i++) {
    if (arr[i] < 0) {
      min.push(arr[i]);
    }
  }


  let i = 1, j = K;

  while (j < arr.length) {

    min.length ? ans.push(min[0]) : ans.push(0);

    if (min.length && arr[i] === min[0]) {
      min.shift();
    }

    if (arr[j] < 0) {
      min.push(arr[j]);
    }

    i++;
    j++;
  }

  return ans;
}