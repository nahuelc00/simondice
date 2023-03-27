let cpuHistory = [];
let userHistory = [];

function initGame() {
  const $play = document.querySelector(".btn");

  $play.addEventListener("click", () => {
    updateState("Turno de la máquina");
    handlerCpuTurn();
    handlerUserTurn();
    $play.setAttribute("disabled", "");
  });
}

function reset() {
  const $reset = document.querySelector(".reset");
  $reset.addEventListener("click", () => {
    location.reload();
  });
}

function handlerCpuTurn() {
  desactivateInputOfSquares();
  renderRounds();
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
    activateInputOfSquares();
    userHistory = [];
    updateState("Tu turno");
  }, (cpuHistory.length + 1) * 700);
}

function handlerUserTurn() {
  const $squaresCont = document.querySelector(".grid");

  $squaresCont.addEventListener("click", (e) => {
    const $square = e.target;
    let stateEl = "";
    highlightSquare($square);
    userHistory.push($square);

    for (let index = 0; index < userHistory.length; index++) {
      const $userSquare = userHistory[index];
      const $cpuSquare = cpuHistory[index];

      if ($userSquare.id === $cpuSquare.id) {
        stateEl = "Es el mismo elemento";
      } else {
        stateEl = "No es el mismo elemento";
        updateState("Perdiste");
        document.querySelector(".reset").removeAttribute("disabled");
        desactivateInputOfSquares();
        break;
      }
    }

    if (
      stateEl === "Es el mismo elemento" &&
      userHistory.length === cpuHistory.length
    ) {
      updateState("Turno de la máquina");
      handlerCpuTurn();
    }
  });
}

function activateInputOfSquares() {
  document.querySelector(".grid").style = "";
}

function desactivateInputOfSquares() {
  document.querySelector(".grid").style = "pointer-events:none;";
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
  reset();
})();
