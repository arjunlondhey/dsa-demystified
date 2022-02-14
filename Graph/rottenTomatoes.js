/*Given a matrix of dimension m*n where each cell in the matrix can have values 0, 1 or 2 which has the following meaning:  

0: Empty cell
1: Cells have fresh oranges
2: Cells have rotten oranges
Determine what is the minimum time required so that all the oranges become rotten.
A rotten orange at index [i,j] can rot other fresh orange at indexes 
[i-1,j], [i+1,j], [i,j-1], [i,j+1] (up, down, left and right). 
If it is impossible to rot every orange then simply return -1.

Input:  arr[][C] = { {2, 1, 0, 2, 1},
                     {1, 0, 1, 2, 1},
                     {1, 0, 0, 2, 1}};

                     Output:
All oranges can become rotten in 2-time frames.
Explanation: 
At 0th time frame:
 {2, 1, 0, 2, 1}
 {1, 0, 1, 2, 1}
 {1, 0, 0, 2, 1}

At 1st time frame:
 {2, 2, 0, 2, 2}
 {2, 0, 2, 2, 2}
 {1, 0, 0, 2, 2}

At 2nd time frame:
 {2, 2, 0, 2, 2}
 {2, 0, 2, 2, 2}
 {2, 0, 0, 2, 2}
*/

let input = [[1, 2], [2, 3], [3, 4], [1, 4], [1, 5]],
  ans = 0,
  visited = {};

function dfs (input, city, parent, visited) {
  if (visited[city]) {
    return;
  }

  visited[city] = true;

  for (let i = 0; i < input[city].length; i++) {
    if (i === city || input[city][i] === 0) continue;
    if (!visited[i]) {
      dfs(input, i, city, visited);
    } else if (input[city][i]) {
      console.log(i, city)
    }
  }
}



for (let i = 0; i < input.length; i++) {
  if (!visited[i]) {
    ans = ans + 1;
    dfs(input, i, 0, visited);
  }
}
console.log(ans);