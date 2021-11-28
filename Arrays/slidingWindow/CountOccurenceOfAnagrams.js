//Date: 2021-11-28
//Question3: Count Occurrence of Anagrams

// console.log(countOccurrenceOfAnagram('aabaabaa', 'aaba'));
console.log(countOccurrenceOfAnagram('axabaabaa', 'aaba'));

function countOccurrenceOfAnagram (input, pattern) {
  if (!input || !pattern) return 0;

  if (input.length < pattern.length) {
    return 0;
  }

  let map = new Map(),
    ans = 0;

  for (let i = 0; i < pattern.length; i++) {
    if (!map.has(pattern[i])) {
      map.set(pattern[i], 1);
    } else {
      map.set(pattern[i], map.get(pattern[i]) + 1);
    }
  }

  count = map.size;

  // setting window Size
  for (let i = 0; i < pattern.length; i++) {
    if (map.has(input[i])) {
      let val = map.get(pattern[i]) - 1;
      map.set(pattern[i], val);

      if (val === 0) {
        count--;
      }
    }
  }

  if (count === 0) {
    ans++;
  }


  let i = 0, j = pattern.length;

  while (j < input.length) {
    if (map.has(input[i])) {
      let val = map.get(input[i]) - 1;
      map.set(input[i], val);

      if (val !== 0) {
        count++;
      } else if (val === 0) {
        count--;
      }
    }

    if (map.has(input[j])) {
      let val = map.get(input[j]) + 1;
      map.set(input[j], val);

      if (val === 0) {
        count--;
      }
    }

    if (count === 0) {
      ans++;
    }

    i++;
    j++;

  }

  return ans;
}