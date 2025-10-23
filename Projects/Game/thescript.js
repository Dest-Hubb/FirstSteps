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
        if (!checkWinner()) {
          player.textContent = "Player 2's Turn";
          // console.log(count);
          turn = 2;
        } else {
          player.textContent = "Player 2 Wins!!!";
          turn = 0;
        }
      } else if (turn == 2) {
        // console.log("O");
        p.textContent = "O";
        cell[i].appendChild(p);
        count++;
        if (!checkWinner()) {
          player.textContent = "Player 1's Turn";
          // console.log(count);
          turn = 1;
        } else {
          player.textContent = "Player 1 Wins!!!";
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

// function checkWinner() {
//   for (let i = 0; i < cell.length; i++) {
//     return cell[0] === cell[1] && cell[1] === cell[2];
//     return cell[3] === cell[4] && cell[4] === cell[5];
//     return cell[6] === cell[7] && cell[7] === cell[8];
//     return cell[0] === cell[3] && cell[3] === cell[6];
//     return cell[1] === cell[4] && cell[4] === cell[7];
//     return cell[2] === cell[5] && cell[5] === cell[8];
//     return cell[0] === cell[4] && cell[4] === cell[8];
//     return cell[2] === cell[4] && cell[4] === cell[6];
//   }
// }

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

/* leetcode (ignore)
let s = "IceCream";

console.log(s);
var reverseVowels = function (s) {
  let arr = [];
  let j = 0;
  for (let i = 0; i < s.length; i++) {
    if (
      s[i] == "a" ||
      "e" ||
      "i" ||
      "o" ||
      "u" ||
      "A" ||
      "E" ||
      "I" ||
      "O" ||
      "U"
    ) {
      arr[j] = s[i];
      j++;
    }
  }
  for (let i = s.length - 1; (i = 0); i--) {
    if (
      s[i] == "a" ||
      "e" ||
      "i" ||
      "o" ||
      "u" ||
      "A" ||
      "E" ||
      "I" ||
      "O" ||
      "U"
    ) {
      s[i] = arr[j];
      j++;
    }
  }
  return s;
};

reverseVowels();
console.log(s);

*/
