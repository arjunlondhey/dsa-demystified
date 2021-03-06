// Given an array of positive integers arr[] and a sum x, find all unique combinations in arr[] where the sum is equal to x
let input = [2, 4, 6, 8];
// op: 8

const combinationSum = (input, i, sum, output) => {
  if (sum === 0) {
    console.log(output)
    return;
  }

  if ((i >= input.length) || (input[i] > sum)) return;

  output.push(input[i]);
  combinationSum(input, i, sum - input[i], output);
  output.pop();

  combinationSum(input, i + 1, sum, output);
}

combinationSum(input, 0, 8, []);