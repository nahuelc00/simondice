function initGame() {
  const $play = document.querySelector(".btn");
  $play.addEventListener("click", () => {
    updateState("Tu turno de jugar");
    renderRounds();
    listenSquareClick();
  });
}

function listenSquareClick() {
  const $squares = document.querySelectorAll(".square");
  $squares.forEach(($square) => {
    $square.addEventListener("click", () => {});
  });
}

function updateState(state) {
  const $state = document.querySelector(".state");
  $state.textContent = state;
}

function renderRounds() {
  const $rounds = document.querySelector(".rounds");
  const numberOfRounds = Number($rounds.textContent);
  $rounds.textContent = numberOfRounds + 1;
}

(function main() {
  initGame();
})();
