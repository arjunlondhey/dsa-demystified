//Date: 2021-11-29
//Question5: Longest subarray of size K

console.log(longestSubArrayOfSizeK([4, 1, 1, 1, 2, 3, 5], 5));
// console.log(longestSubArrayOfSizeK([1, 3, 4, -3, 5, 3, 6, 7], 3));

function longestSubArrayOfSizeK (arr, K) {
  if (!arr.length || !K || K < 0) return 0;

  let i = 0, j = 0, max = 0, sum = 0;

  while (j < arr.length) {
    if (sum < K) {
      sum += arr[j];
      j++;
      continue;
    }

    if (sum >= K) {
      if (sum === K) {
        let count = j + 1 - i;

        if (count > max) {
          max = count;
        }
      }

      i++; j++;
      sum = 0;
    }
  }

  return ans;
}