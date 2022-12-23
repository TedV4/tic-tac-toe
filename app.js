//Manage DOM elements
const displayController = (() => {
  const cells = document.querySelectorAll(".cell");
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

  //Apply logic to DOM elements
  function initGame() {
    displayController.cells.forEach((cell) =>
      cell.addEventListener("click", cellClicked)
    );
    displayController.restartBtn.addEventListener("click", restartGame);
    console.log(displayController.cells)
    displayController.gameInfo.textContent = `${currentPlayer}'s turn`;
    running = true;
  }
  
  //If a cell is empty and the game is running, continue to mark the clicked cell
  function cellClicked() {
    const cellIndex = this.getAttribute("cellIndex");

    if (coordinates[cellIndex] != "" || !running) {
      return;
    }

    updateCell(this, cellIndex);
    checkWinner();
  }

  function updateCell(cell, index) {
    coordinates[index] = currentPlayer;
    cell.textContent = currentPlayer;
  }

  function changePlayer() {
    currentPlayer = (currentPlayer == 'X' ? 'O' : 'X');
    displayController.gameInfo.textContent = `${currentPlayer}'s turn`;
  }

  function checkWinner() {
    let roundComplete = false;

    
  }

  function restartGame() {}

  function playRound() {
    initGame();
  }

  return {
    playRound,
  };
})();

gameLogic.playRound();
