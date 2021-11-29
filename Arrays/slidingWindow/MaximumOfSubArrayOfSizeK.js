//Date: 2021-11-29
//Question4: Find maximum of all sub-arrays of length K

console.log(maximumOfAllSubArrayOfSizeK([1, 3, -1, -3, 5, 3, 6, 7], 3));
// console.log(maximumOfAllSubArrayOfSizeK([1, 3, 4, -3, 5, 3, 6, 7], 3));

function maximumOfAllSubArrayOfSizeK (arr, K) {
  if (!arr.length || !K || K < 0) return 0;

  let list = [],
    max = Number.MIN_SAFE_INTEGER,
    ans = [];

  // setting window size
  for (let i = 0; i < K; i++) {
    while (list.length && arr[i] >= list[0]) {
      list.shift();
    }

    if (arr[i] > max) {
      max = arr[i];
    }

    list.push(arr[i]);
  }

  ans.push(max);

  let i = 1, j = K;

  while (j < arr.length) {
    while (list.length && arr[j] >= list[0]) {
      list.shift();
    }

    list.push(arr[j]);
    ans.push(list[0]);

    i++;
    j++;
  }

  return ans;
}