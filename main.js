// CONTAIN TITLE
let containTitle = document.getElementById("contain-title");
// TITLE H1
let title = document.getElementById("title");
// CONTAIN SQUARES || SQUARES
const squares = document.getElementById("all_squares");
squares.style.display = "none";
let square = document.getElementsByClassName("square");
// H2 EASY || HARD || HARDCORE
const btn1 = document.getElementById("btn_easy");
const btn2 = document.getElementById("btn_hard");
const btn3 = document.getElementById("btn_hardcore");
//  PLAY
const go = document.createElement("h2");
let text = document.createTextNode("Play");
go.appendChild(text);
// CONTAIN MODES
let containModes = document.getElementById("play_modes");
// BUTTON RESET
const btnReset = document.createElement("h2");
let reset = document.createTextNode("Reset");
btnReset.appendChild(reset);
btnReset.classList.add("mode");
// TIME
const time = document.getElementById("times");
// INITIALIZED VARIABLE
let second = 0;
let countToWin = 0;
let win = false;
let timeout = null;
let interval1 = null;

// WHEN YOU SELECT MODE
const play = (mode) => {
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
  containTitle.style.display = "none";
  go.style.cursor = "pointer";
  go.classList.add("mode_go");
  containModes.appendChild(go);
  squares.style.display = "flex";
};
// TIME TO PLAY || INTERVAL || TIMEOUT
const start = () => {
  squares.style.pointerEvents = "auto";
  go.style.display = "none";
  containModes.appendChild(time);
  containModes.style.height = "auto";
  time.classList.add("mode_go");
  time.innerHTML = second;
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
  interval1 = setInterval(countDown, 875);
  timeout = setTimeout(action, 9000);
};
go.addEventListener("click", start);

// WHEN YOU SELECT SQUARE

for (let i = 0; i < square.length; i++) {
  square[i].addEventListener("click", function (e) {
    square[i].classList.add("square1");
    square[i].style.pointerEvents = "none";
    countToWin++;
    if (countToWin == 20) {
      clearTimeout(timeout);
      clearInterval(interval1);
      action();
    }
  });
}

// IF YOU SELECT ALL OR NOT
const action = () => {
  time.style.display = "none";
  go.style.display = "none";
  containTitle.style.display = "block";
  btnReset.style.display = "block";
  btnReset.style.fontSize = "40px";
  win = countToWin == 20;
  win ? resetGame(win) : resetGame();
};
// RESET GAME FOR PLAY AGAIN
const resetGame = (ifWin = false) => {
  containModes.appendChild(btnReset);
  btnReset.addEventListener("click", function () {
    location.reload();
  });
  title.textContent = ifWin ? "You Win" : "You Lose";
  title.style.color = ifWin ? "#00ff00" : "red";
  squares.style.opacity = ifWin ? "0.5" : "0.5";
};
