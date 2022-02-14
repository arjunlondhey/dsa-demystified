const fillBoard = (N) => {
  const board = [];

  for (let i = 0; i < N; i++) {
    board[i] = [];
    for (let j = 0; j < N; j++) {
      board[i][j] = 0;
    }
  }

  return board;
}

const isValid = (row, col, board) => {
  let i, j;

  /* Check this row on left side */
  for (i = 0; i < col; i++)
    if (board[row][i])
      return false;

  /* Check upper diagonal on left side */
  for (i = row, j = col; i >= 0 && j >= 0; i--, j--)
    if (board[i][j])
      return false;

  /* Check lower diagonal on left side */
  for (i = row, j = col; j >= 0 && i < board.length; i++, j--)
    if (board[i][j])
      return false;

  return true;
}

const NQueens = (output, j) => {
  if (j === output.length) {
    console.log(output);
    return true;
  }

  for (let i = 0; i < output.length; i++) {
    if (isValid(i, j, output)) {
      output[i][j] = 1;

      NQueens(output, j + 1);

      output[i][j] = 0;
    }
  }

  return false;
}

const callNQueen = (N) => {
  let board = fillBoard(N);

  NQueens(board, 0);
}

callNQueen(4);