//Date: 2021-11-29
/**
 * Maximum Area Histogram
 * 
 * Find the largest rectangular area possible in a given histogram where the largest rectangle can be made 
 * of a number of contiguous bars. For simplicity, assume that all bars have same width and the width is 1 unit. 
 * For example,
 * consider the following histogram with 7 bars of heights {6, 2, 5, 4, 5, 1, 6}.
 * The largest possible rectangle possible is 12 (see the below figure, the max area rectangle is highlighted in red)
 * https://www.geeksforgeeks.org/largest-rectangle-under-histogram/
 * */

console.log(MaxAreaHistogram([6, 2, 5, 4, 5, 1, 6]));
// console.log(MaxAreaHistogram([6, 2]));

function MaxAreaHistogram (arr) {
  if (!arr.length) return [];

  let nsel = NextSmallerElementLeft(arr),
    nser = NextSmallerElementRight(arr),
    max = 0;

  for (let i = 0; i < arr.length; i++) {
    let diffIndex = nser[i] - nsel[i] - 1;

    max = Math.max(max, arr[i] * diffIndex, arr[i]);
  }

  return max;
}

function NextSmallerElementLeft (arr) {
  if (!arr.length) return [];

  let stack = [{ val: arr[0], idx: 0 }], ans = [-1];

  for (let i = 1; i < arr.length; i++) {
    if (!stack.length) {
      stack.push({ val: arr[i], idx: i });
    }

    while (stack.length && stack[stack.length - 1].val >= arr[i]) {
      stack.pop();
    }

    if (!stack.length) {
      ans.push(-1);
    } else {
      ans.push(stack[stack.length - 1].idx);
    }

    stack.push({ val: arr[i], idx: i });
  }

  return ans;
}

function NextSmallerElementRight (arr) {
  if (!arr.length) return [];

  let stack = [{ val: arr[arr.length - 1], idx: arr.length - 1 }], ans = [-1];

  for (let i = arr.length - 2; i >= 0; i--) {
    if (!stack.length) {
      stack.push({ val: arr[i], idx: i });
    }

    while (stack.length && stack[stack.length - 1].val >= arr[i]) {
      stack.pop();
    }

    if (!stack.length) {
      ans.push(-1);
    } else {
      ans.push(stack[stack.length - 1].idx);
    }

    stack.push({ val: arr[i], idx: i });
  }

  return ans.reverse();
}