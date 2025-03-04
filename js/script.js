let music = new Audio("audio/music.mp3");
let turnAudio = new Audio("audio/ting.mp3");
let gameoverAudio = new Audio("audio/gameover.mp3");
let turn = "X";
let isGameover = false;

const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

// Function to check for a win
const checkWin = () => {
  let boxtext = document.getElementsByClassName("boxtext");
  let wins = [
    [0, 1, 2, 5, 5, 0],
    [3, 4, 5, 5, 15, 0],
    [6, 7, 8, 5, 25, 0],
    [0, 3, 6, -5, 15, 90],
    [1, 4, 7, 5, 15, 90],
    [2, 5, 8, 15, 15, 90],
    [0, 4, 8, 5, 15, 45],
    [2, 4, 6, 5, 15, 135],
  ];
  wins.forEach((e) => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[1]].innerText === boxtext[e[2]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        boxtext[e[0]].innerText + " Won";
      isGameover = true;
      document
        .querySelector(".imgBox")
        .getElementsByTagName("img")[0].style.width = "200px";
      document.querySelector(".line").style.width = "20vw";
      document.querySelector(
        ".line"
      ).style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
    }
  });
};

// Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", (e) => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      turn = changeTurn();
      console.log(turn);
      turnAudio.play();
      checkWin();
      console.log(turn);
      console.log(isGameover);
      if (!isGameover) {
        console.log("Adeeba");
        document.getElementsByClassName("info")[0].innerText =
          "Turn for " + turn;
      }
    }
  });
});

// Add onclick listener to reset button
reset.addEventListener("click", (e) => {
  let boxtext = document.querySelectorAll(".boxtext");
  Array.from(boxtext).forEach((element) => {
    element.innerText = "";
  });
  turn = "X";
  isGameover = false;
  document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
  document.querySelector(".imgBox").getElementsByTagName("img")[0].style.width =
    "0px";
  document.querySelector(".line").style.width = "0vw";
});
