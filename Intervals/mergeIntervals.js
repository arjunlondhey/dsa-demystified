let arr = [[1, 3], [2, 6], [8, 10], [15, 18]];

arr = arr.sort((a, b) => {
  if (a[0] < b[0]) {
    return a[0] - b[0];
  } else if (a[0] == b[0]) {
    return a[1] - b[1];
  }
});

let ans = [];

let mergeIndex = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (mergeIndex[1] >= arr[i][0]) {
    mergeIndex = [mergeIndex[0], Math.max(mergeIndex[1], arr[i][1])];
  } else {
    ans.push(mergeIndex);
    mergeIndex = arr[i]
  }
}

ans.push(mergeIndex)

console.log(ans)