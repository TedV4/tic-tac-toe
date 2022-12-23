//Manage DOM elements
const displayController = (() => {
  const cells = document.querySelectorAll(".cells");
  const gameInfo = document.querySelector(".game-info");
  const restartBtn = document.querySelector(".restartBtn");

  return { cells, gameInfo, restartBtn };
})();

//Manage game logic
const gameLogic = (() => {
  let coordinates = ["", "", "", "", "", "", "", "", ""];
  let currentPlayer = "X";
  let running = false;

  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function initGame() {
    displayController.cells.forEach((cell) =>
      cell.addEventListener("click", cellClicked)
    );
    displayController.restartBtn.addEventListener("click", restartGame);
    running = true;
  }

  function cellClicked() {}

  function updateCell(cell, index) {}

  function changePlayer() {}

  function restartGame() {}

  function playRound() {
    initGame();
  }
})();
