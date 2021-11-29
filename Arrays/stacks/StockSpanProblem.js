//Date: 2021-11-29
/**
 * The stock span problem is a financial problem where we have a series of n daily price quotes for a stock and we need to calculate span of stock’s price for all n days. 
 * The span Si of the stock’s price on a given day i is defined as the maximum number of consecutive days just before the given day, for which the price of the stock on the current day is less than its price on the given day. 
 * For example,
 * if an array of 7 days prices is given as {100, 80, 60, 70, 60, 75, 85}, 
 * then the span values for corresponding 7 days are {1, 1, 1, 2, 1, 4, 6} 
 * */

console.log(StockSpanProblem([100, 80, 60, 70, 60, 75, 85]));

function StockSpanProblem (arr) {
  if (!arr.length) return [];

  let stack = [{ val: arr[0], idx: 0 }], ans = [1];

  for (let i = 1; i < arr.length; i++) {
    if (!stack.length) {
      stack.push({ val: arr[i], idx: i });
    }

    while (stack && stack[stack.length - 1].val <= arr[i]) {
      stack.pop();
    }

    if (!stack.length) {
      ans.push(1);
    } else {
      let idx = stack[stack.length - 1].idx;
      ans.push(i - idx);
    }

    stack.push({ val: arr[i], idx: i });
  }

  return ans;
}