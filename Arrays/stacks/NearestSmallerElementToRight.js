//Date: 2021-11-29
//Question6: NearestSmallerElementToRight

// console.log(NearestSmallerElementToRight([1, 3, 4, -3, 5, 3, 6 , 7]));
console.log(NearestSmallerElementToRight([1, 3, 0, 0, 1, 2, 4]));

function NearestSmallerElementToRight (arr) {
  if (!arr.length) return [];

  let stack = [arr[arr.length - 1]], ans = [-1];

  for (let i = arr.length - 2; i >= 0; i--) {
    if (!stack.length) {
      stack.push(arr[i]);
    }

    while (stack[stack.length - 1] >= arr[i]) {
      stack.pop();
    }

    if (!stack.length) {
      ans.push(-1);
    } else {
      ans.push(stack[stack.length - 1]);
    }

    stack.push(arr[i]);
  }

  return ans.reverse();
}