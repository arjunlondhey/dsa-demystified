//Date: 2021-11-28
//Question1: Find Maximum Sum subarray of size K


console.log(findMaxSubArray([1, 2, 3, 4, 5, 6, 7, 8], 3));
console.log(findMaxSubArray([1, 2, 3], 5)); // 0
console.log(findMaxSubArray([1, 2, 3, 1, 2, 2, 9, -2, 8], 3)); // 15

function findMaxSubArray (arr, K) {
  let sum = 0;

  if (arr.length < K) {
    return 0;
  }

  for (let i = 0; i < K; i++) {
    sum += arr[i];
  }

  let i = 1, j = K, max = sum;

  while (j < arr.length) {
    sum = sum - arr[i - 1] + arr[j];

    if (sum > max) {
      max = sum;
    }

    j++;
    i++;
  }

  return max;
}



