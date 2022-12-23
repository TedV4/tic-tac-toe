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

const Game = (() => {
  const gameBoard = document.querySelector(".grid-container");

  let turn = 0;
  let currentPlayer = player1;

  function getCurrentPlayer() {
    if (turn == 0 || turn % 2 == 0) {
      currentPlayer = player1;
    } else {
      currentPlayer = player2;
    }
  }

  const startGame = () => {
    for (let i = 0; i < 9; i++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      //Create a game function to sub here
      cell.addEventListener('click', function() {
        cell.textContent = currentPlayer.marker;
        turn++;
        getCurrentPlayer();
      })
      gameBoard.appendChild(cell);
    }
  };
  return { gameBoard, startGame };
})();

Game.startGame();
