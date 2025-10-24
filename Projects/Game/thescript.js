let cell = document.getElementsByClassName("cell");
let player = document.getElementById("player");
let turn = 1;
let count = 0;

function isEmpty(x) {
  // if (x.textContent == "") {
  //   console.log("isEmpty");
  //   return true;
  // } else {
  //   console.log("notEmpty");
  //   return false;
  // }
  return x.textContent === "";
}

function checkWinner(x) {
  let possibles = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let [a, b, c] of possibles) {
    if (
      x[a].textContent != "" &&
      x[a].textContent === x[b].textContent &&
      x[b].textContent === x[c].textContent
    )
      return true;
  }
  return false;
}

for (let i = 0; i < cell.length; i++) {
  cell[i].addEventListener("click", function () {
    let p = document.createElement("p");
    if (isEmpty(cell[i])) {
      if (turn == 1) {
        // console.log("X");
        p.textContent = "X";
        cell[i].appendChild(p);
        count++;
        // console.log(player.textContent);
        if (!checkWinner(cell)) {
          player.textContent = "Player 2's Turn";
          // console.log(count);
          turn = 2;
        } else {
          player.textContent = "Player 1 Wins!!!";
          turn = 0;
        }
      } else if (turn == 2) {
        // console.log("O");
        p.textContent = "O";
        cell[i].appendChild(p);
        count++;
        if (!checkWinner(cell)) {
          player.textContent = "Player 1's Turn";
          // console.log(count);
          turn = 1;
        } else {
          player.textContent = "Player 2 Wins!!!";
          turn = 0;
        }
      }
    }

    if (count === 9) {
      player.textContent = "Game Over ";
    }
    // else if(turn === 0)
    //end the game
  });
}

for (let i = 0; i < cell.length; i++) {
  cell[i].addEventListener("mousedown", function () {
    if (!isEmpty(cell[i])) {
      console.log("Occupied");
      cell[i].style.backgroundColor = "red";
    }
  });
  cell[i].addEventListener("mouseup", function () {
    if (!isEmpty(cell[i])) {
      cell[i].style.backgroundColor = "";
    }
  });
  cell[i].addEventListener("mouseout", function () {
    //added this incase a user holds down on the element because the background doesnt clear if this happens
    if (!isEmpty(cell[i])) {
      cell[i].style.backgroundColor = "";
    }
  });
}
