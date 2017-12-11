const isLiveCell = (x, y, board) => board[x] && board[x][y] && board[x][y] === 1;

const countLiveNeighbors = (x, y, board) => {
  let liveNeighborCount = 0;

  for (let i = -1; i <= 1; i += 1) {
    for (let j = -1; j <= 1; j += 1) {
      if (isLiveCell(x + i, y + j, board) && (!(i === 0 && j === 0))) {
        liveNeighborCount += 1;
      }
    }
  }
  return liveNeighborCount;
};

const generateSuccessorCell = (x, y, board) => {
  const currentState = board[x][y];
  const liveNeighbors = countLiveNeighbors(x, y, board);

  const underpopulation = currentState === 1 && liveNeighbors < 2;
  const survival = currentState === 1 && (liveNeighbors === 2 || liveNeighbors === 3);
  const overpopulation = currentState === 1 && liveNeighbors > 3;
  const reproduction = currentState === 0 && liveNeighbors === 3;

  if (underpopulation) { return 0; }
  if (survival) { return 1; }
  if (overpopulation) { return 0; }
  if (reproduction) { return 1; }
  return 0;
};

const generateEmptyBoard = (x, y) => {
  const emptyBoard = [];
  for (let i = 0; i < y; i += 1) {
    emptyBoard.push(new Array(x));
  }
  return emptyBoard;
};

const generateSuccessorBoard = (board) => {
  const successor = generateEmptyBoard(board[0].length, board.length);
  board.forEach((row, i) => {
    row.forEach((cell, j) => {
      successor[i][j] = generateSuccessorCell(i, j, board);
    });
  });
  return successor;
};

module.exports = { countLiveNeighbors, generateSuccessorCell, generateSuccessorBoard };
