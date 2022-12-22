const gameBoard = (() => {
  const grid = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return {
    grid,
  };
})();

const Player = (marker) => {
  return { marker };
};

const player1 = Player("X");
const player2 = Player("O");

const displayController = (() => {
  const gameBoard = document.querySelector(".grid-container");
  const initBoard = () => {
    for (let i = 0; i < 9; i++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      //Create a game function to sub here
      cell.addEventListener('click', function() {
        cell.textContent = player1.marker;
      })
      gameBoard.appendChild(cell);
    }
  };
  return { gameBoard, initBoard };
})();

displayController.initBoard();
