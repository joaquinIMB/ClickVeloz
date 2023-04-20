// CONTAIN SQUARES || SQUARES
const squares = document.getElementById("all_squares");
let square = document.getElementsByClassName("square");
// H2 EASY || HARD || HARDCORE
const btn1 = document.getElementById("btn_easy");
const btn2 = document.getElementById("btn_hard");
const btn3 = document.getElementById("btn_hardcore");
// H2 PLAY
const go = document.createElement("h2");
let text = document.createTextNode("Play");
go.appendChild(text);
// CONTAIN MODES
let contain = document.getElementById("play_modes");
// BUTTON RESET
const btnReset = document.createElement("h2");
let reset = document.createTextNode("Reset");
btnReset.appendChild(reset);
btnReset.classList.add("mode");
// TITULO H1
let tittle = document.querySelector("#title_");
// TIME H2
const time = document.getElementById("times");
// INITIALIZED VARIABLE
let second = 0;
let countToWin = 0;
let win = false;
let timeout = null;
let interval1 = null;
// WHEN YOU SELECT MODE
function play(mode) {
  if (mode === "Easy") {
    second = 8;
  }
  if (mode === "Hard") {
    second = 6;
  }
  if (mode === "Hardcore") {
    second = 4;
  }
  btn1.style.display = "none";
  btn2.style.display = "none";
  btn3.style.display = "none";
  go.style.cursor = "pointer";
  go.classList.add("mode");
  time.classList.add("mode");
  contain.appendChild(go);
  contain.appendChild(time);
}
go.addEventListener("click", start);
// TIME TO PLAY || INTERVAL || TIMEOUT
function start() {
  squares.style.pointerEvents = "auto";
  timeout = setTimeout(action, 9000);
  go.style.display = " none";
  function countDown() {
    time.innerHTML = second;
    if (second == 0) {
      clearInterval(interval1);
      squares.style.pointerEvents = "none";
      setTimeout(action, 0);
    } else {
      second = second - 1;
    }
  }
  interval1 = setInterval(countDown, 1000);
}
// WHEN YOU SELECT SQUARE
for (let i = 0; i < square.length; i++) {
  square[i].addEventListener("click", function () {
    square[i].classList.add("square1");
    square[i].style.pointerEvents = "none";
    countToWin++;
    if (countToWin == 18) {
      clearTimeout(timeout);
      clearInterval(interval1);
      action();
    }
  });
}

// IF YOU SELECT ALL OR NOT
function action() {
  time.style.display = "none";
  go.style.display = "none";
  btnReset.style.display = "block";
  win = countToWin == 18;
  win ? resetGame(win) : resetGame();
}
// RESET GAME FOR PLAY AGAIN
function resetGame(ifWin = false) {
  contain.appendChild(btnReset);
  btnReset.addEventListener("click", function () {
    location.reload();
  });
  // condicional ternario
  tittle.textContent = ifWin ? "¡You Win!" : "You Lose";
  tittle.style.color = ifWin ? "#00ff00" : "red";
}
