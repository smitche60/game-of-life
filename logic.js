// Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
// Any live cell with two or three live neighbours lives on to the next generation.
// Any live cell with more than three live neighbours dies, as if by overpopulation.
// Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

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

  if (currentState === 1) {
    if (liveNeighbors < 2) {
      return 0;
    }
    if (liveNeighbors === 2 || liveNeighbors === 3) {
      return 1;
    }
    if (liveNeighbors > 3) {
      return 0;
    }
  }

  if (currentState === 0 && liveNeighbors === 3) {
    return 1;
  }
  return 0;
};

const generateSuccessorBoard = (board) => {
  let successor = [];
  // iterate over each cell, pushing the next generation to the successor
}

module.exports = { countLiveNeighbors };
