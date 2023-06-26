//CONTAIN ALL
const contain = document.getElementById("contain")
// CONTAIN TITLE
let containTitle = document.getElementById("contain-title");
// TITLE H1
let title = document.getElementById("title");
// CONTAIN SQUARES || SQUARES
const squares = document.getElementById("all_squares");
let square = document.getElementsByClassName("square");
// H2 EASY || HARD || HARDCORE
const btn1 = document.getElementById("btn_easy");
const btn2 = document.getElementById("btn_hard");
const btn3 = document.getElementById("btn_extreme");
// CONTAIN MODES
let containModes = document.getElementById("play_modes");
//CONTAIN MODE START
const containModeStart = document.createElement("section");
containModeStart.classList.add("contain_mode_Start");
// START
let modeStart = document.createElement("h2");
let text = document.createTextNode("Start");
modeStart.appendChild(text);
// BUTTON RESET
const btnReset = document.createElement("h2");
let reset = document.createTextNode("Play Again");
btnReset.appendChild(reset);
btnReset.classList.add("mode_start");
//CONTAIN TIME
const containTime = document.createElement("footer");
containTime.classList.add("contain_time");
// TIME
const time = document.createElement("h2");
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
  if (mode === "Extreme") {
    second = 4;
  }
  btn1.textContent = `Mode ${mode}`;
  containTitle.style.display = "none";
  containModes.style.display = "none";
  contain.appendChild(containModeStart);
  modeStart.classList.add("mode_start");
  containModeStart.appendChild(btn1);
  containModeStart.appendChild(modeStart);
  squares.style.display = "flex";
  btn1.classList.replace("mode", "mode-selected");
  time.textContent = "Time: ";  
  contain.appendChild(containTime);
  containTime.appendChild(time);
  time.classList.add("time_to-end");
  time.textContent = `Time: ${second}`;
};
// TIME TO PLAY || INTERVAL || TIMEOUT
const start = () => {
  squares.style.pointerEvents = "auto";
  squares.style.opacity = "1"
  containModeStart.style.display="none"
  btn1.style.display = "none";
  modeStart.style.display = "none";
  function countDown() {
    time.textContent = `Time: ${second}`;
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
modeStart.addEventListener("click", start);

// WHEN YOU SELECT SQUARE

for (let i = 0; i < square.length; i++) {
  square[i].addEventListener("click", function () {
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
  modeStart.style.display = "block";
  btnReset.style.display = "block";
  win = countToWin == 20;
  win ? resetGame(win) : resetGame();
};
// RESET GAME FOR PLAY AGAIN
const resetGame = (ifWin = false) => {
  containModeStart.style.display="flex";
  containModeStart.appendChild(btnReset);
  btnReset.addEventListener("click", function () {
    location.reload();
  });
  modeStart.classList.replace("mode_start", "ifWinOrLose");
  modeStart.textContent = ifWin ? "You Win" : "You Lose";
  modeStart.style.color = ifWin ? "#00ff00" : "red";
  modeStart.style.fontSize = ifWin ? "4rem" : "4rem";
  containModeStart.style.background= ifWin ? "#ffffff14" : "#00000085" ;
  squares.style.opacity = ".8"
};
