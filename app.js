const Player = (marker) => {
  return { marker };
};

const player1 = Player("X");
const player2 = Player("O");

const Game = (() => {
  const gameBoard = document.querySelector(".grid-container");

  let square = { board: [1, 2, 3, 4, 5, 6, 7, 8, 9] };
  let turn = 0;
  let currentPlayer = player1;
  let winner = '';
  let winConditions = [
    [square.board[0], square.board[1], square.board[2]],
    [square.board[3], square.board[4], square.board[5]],
    [square.board[6], square.board[7], square.board[8]],
    [square.board[0], square.board[3], square.board[6]],
    [square.board[1], square.board[4], square.board[7]],
    [square.board[2], square.board[5], square.board[8]],
    [square.board[0], square.board[4], square.board[8]],
    [square.board[6], square.board[4], square.board[2]],
  ];


  function allEqual(arr) {
    if (arr.every((val) => val === arr[0]) === true) {
      console.log("win");
      winner = arr[0];
    }
  }

  function checkForWin() {
    for (let i = 0; i < winConditions.length; i++) {
      console.log(winConditions[i]);
      allEqual(winConditions[i]);
    }
  }

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
      cell.id = `cell${i}`;
      cell.addEventListener("click", function (e) {
        let cellNumber = parseInt(e.target.id[4]);
        console.log(cellNumber);
        if (cell.textContent === "") {
          cell.textContent = currentPlayer.marker;
          square.board[cellNumber] = currentPlayer.marker;
          turn++;
          getCurrentPlayer();
          winConditions = [
            [square.board[0], square.board[1], square.board[2]],
            [square.board[3], square.board[4], square.board[5]],
            [square.board[6], square.board[7], square.board[8]],
            [square.board[0], square.board[3], square.board[6]],
            [square.board[1], square.board[4], square.board[7]],
            [square.board[2], square.board[5], square.board[8]],
            [square.board[0], square.board[4], square.board[8]],
            [square.board[6], square.board[4], square.board[2]],
          ];
          checkForWin();
        }
      });
      gameBoard.appendChild(cell);
    }
  };

  return { gameBoard, startGame };
})();

Game.startGame();
