let arr = [[0, 30], [5, 10], [15, 20]]

let start = [], end = [];

for (let i = 0; i < arr.length; i++) {
  start.push(arr[i][0])
  end.push(arr[i][1])
}
start = start.sort((a, b) => a - b);
end = end.sort((a, b) => a - b);

console.log(start)
console.log(end)
let i = 0, j = 0, ans = 0;
while (i < start.length && j < end.length) {
  if (end[j] > start[i]) {
    ans++;
    i++;
  } else {
    ans--;
    j++;
  }
}

console.log(ans)