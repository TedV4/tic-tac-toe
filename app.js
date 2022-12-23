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
    currentPlayer = currentPlayer == "X" ? "O" : "X";
    displayController.gameInfo.textContent = `${currentPlayer}'s turn`;
  }

  function checkWinner() {
    let roundComplete = false;
    //If all elements of a win condition are equal, and are not empty, complete the round
    for (let i = 0; i < winConditions.length; i++) {
      const condition = winConditions[i];
      const cellA = coordinates[condition[0]];
      const cellB = coordinates[condition[1]];
      const cellC = coordinates[condition[2]];

      if (cellA === "" || cellB === "" || cellC === "") {
        continue;
      }

      if (cellA === cellB && cellB === cellC) {
        roundComplete = true;
        break;
      }
    }

    if (roundComplete === true) {
      displayController.gameInfo.textContent = `${currentPlayer} wins!`;
      running = false;
    } else if (!coordinates.includes("")) {
      displayController.gameInfo.textContent = "Draw!";
      running = false;
    } else {
      changePlayer();
    }
  }

  function restartGame() {
    currentPlayer = "X";
    coordinates = ["", "", "", "", "", "", "", "", ""];
    displayController.cells.forEach((cell) => (cell.textContent = ""));
    displayController.gameInfo.textContent = `${currentPlayer}'s turn`;
    running = true;
  }

  function playRound() {
    initGame();
  }

  return {
    playRound,
  };
})();

gameLogic.playRound();
