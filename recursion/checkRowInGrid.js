function checkRow(grid, row, column, word) {
  let charLeft = grid[row].length - row;
  if (charLeft < word.length) {
    return false;
  }

  let j = 1;
  for (let i = column + 1; i < grid[row].length; i++) {
    if (j === word.length -1) {
      return true;
    }

    if (grid[row][i] === word[j]) {
      j++;
    }
  }

  return false;
}

function checkColumn(grid, row, column, word) {
  let charLeft = grid[column].length - column;

  if (charLeft < word.length) {
    return false;
  }

  let j = 1;
  for (let i = row + 1; i < grid[column].length; i++) {
    if (j === word.length -1) {
      return true;
    }

    if (grid[i][column] === word[j]) {
      j++;
    }
  }

  return false;
}

function findWord(grid, word) {
  if (grid.length < word) {
    return false;
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === word[0]) {
        return checkRow(grid, i, j, word) || checkColumn(grid, i, j, word);
      }
    }
  }

  return false;
}

let input = [['d', 'o', 'v', 'e', 'f'],
              ['i', 'n', 'e', 's', 't'],
              ['c', 'e', 'm', 'o', 'h'],
              ['a', 't', 'u', 'v', 'b'],
              ['t', 'p', 'q', 'r', 'g']
            ]

  console.log(findWord(input, 'dove'))
  console.log(findWord(input, 'cat'))
  console.log(findWord(input, 'nest'))
  console.log(findWord(input, 'home'))
  console.log(findWord(input, 'nemo'))