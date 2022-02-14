// Given an array of positive integers arr[] and a sum x, find all unique combinations in arr[] where the sum is equal to x
// with no repetition of characters
let input = [10, 1, 2, 7, 6, 1, 5], sum = 8;
// op: [[1, 1, 6], [1, 2, 5], [1, 7], [2, 6]]

const combinationSum = (input, i, sum, output) => {
  if (sum === 0) {
    console.log(output)
    return;
  }

  if ((i >= input.length) || (input[i] > sum)) return;

  output.push(input[i]);
  combinationSum(input, i + 1, sum - input[i], output);
  output.pop();
  combinationSum(input, i + 1, sum, output);
}

combinationSum(input.sort(), 0, sum, []);