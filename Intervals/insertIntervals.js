let intervals = [[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], newInterval = [4, 8];

let ans = [], i = 0, mergeIndex = newInterval, added = false;

while (i < intervals.length) {
  if (intervals[i][1] < newInterval[0]) {
    ans.push(intervals[i]);
  } else if (intervals[i][0] > newInterval[1]) {
    if (mergeIndex.length && !added) {
      ans.push(mergeIndex);
      added = true;
    }

    ans.push(intervals[i]);
  } else if (intervals[i][1] >= newInterval[0]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(intervals[i][1], newInterval[1])
    console.log(newInterval[0], intervals[i][0])
    mergeIndex = newInterval;
  }

  i++;
}

if (!added && mergeIndex.length) {
  ans.push(mergeIndex);
}
console.log(ans)
