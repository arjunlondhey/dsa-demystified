//Date: 2021-11-29
//Question5: Longest subarray with K unique characters

console.log(LongestSubStringWithKUniqueChars('aabacbebebe', 3));

function LongestSubStringWithKUniqueChars (input, K) {
  if (!input.length || !K || K < 0) return 0;

  let i = 0, j = 0, max = 0, count = 0,
    map = new Map();

  while (j < input.length) {
    if (map.size <= K) {
      if (!map.has(input[j])) {
        map.set(input[j], 1);
      } else {
        map.set(input[j], map.get(input[j]) + 1);
      }

      count++;
    }

    if (map.size > K) {
      while (map.size > K) {
        map.set(input[i], map.get(input[i]) - 1);

        if (!map.get(input[i])) {
          map.delete(input[i]);
        }

        i++;
        count--;
      }
    }

    if (count > max) {
      max = count;
    }

    j++;
  }

  return max;
}