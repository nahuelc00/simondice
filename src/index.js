function initGame() {
  const $play = document.querySelector(".btn");
  $play.addEventListener("click", (e) => {
    updateState("Tu turno de jugar");
    renderRounds();
    listenSquareClick();
    e.target.setAttribute("disabled", "");
  });
}

function listenSquareClick() {
  const $squares = document.querySelectorAll(".square");
  $squares.forEach(($square) => {
    $square.addEventListener("click", () => {
      highlightSquare($square);
    });
  });
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
