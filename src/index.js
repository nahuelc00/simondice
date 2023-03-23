let cpuHistory = [];
let userHistory = [];

function initGame() {
  const $play = document.querySelector(".btn");

  $play.addEventListener("click", () => {
    updateState("Turno de la máquina");
    handlerCpuTurn();
    listenSquareClick();
  });
}

function handlerCpuTurn() {
  desactivateInput();
  const numRandom = getRandomNumber();
  const $squares = document.querySelectorAll(".square");
  const squareHighlight = $squares[numRandom];

  cpuHistory.push(squareHighlight);

  if (cpuHistory.length === 1) {
    highlightSquare(squareHighlight);
  } else {
    cpuHistory.forEach(($square, index) => {
      const ms = (index + 1) * 1000;
      setTimeout(() => {
        highlightSquare($square);
      }, ms);
    });
  }

  setTimeout(() => {
    activateInput();
    updateState("Tu turno");
  }, (cpuHistory.length + 1) * 500);
}

function listenSquareClick() {
  const $squaresCont = document.querySelector(".grid");

  $squaresCont.addEventListener("click", (e) => {
    const $square = e.target;
    highlightSquare($square);
    cpuHistory.forEach((element) => {});
  });
}

function activateInput() {
  document.querySelector("body").style = "";
}

function desactivateInput() {
  document.querySelector("body").style = "pointer-events:none;";
}

function getRandomNumber() {
  const numberRandom = Math.floor(Math.random() * 4);
  return numberRandom;
}

function updateState(state) {
  const $state = document.querySelector(".state");
  $state.textContent = state;
}

function highlightSquare($square) {
  $square.classList.remove("opacity-50");
  $square.classList.add("opacity-100");
  setTimeout(() => {
    $square.classList.remove("opacity-100");
    $square.classList.add("opacity-50");
  }, 600);
}

function renderRounds() {
  const $rounds = document.querySelector(".rounds");
  const numberOfRounds = Number($rounds.textContent);
  $rounds.textContent = numberOfRounds + 1;
}

(function main() {
  initGame();
})();
