const startButton = document.querySelector("#start-button");
const restartButton = document.querySelector("#restart-button");
const endRestartButton = document.querySelector("#end-restart-button");
const deathRestartButton = document.querySelector("#death-restart-button");

let game;

startButton.addEventListener("click", () => {
    game = new Game(800,600);
    game.start();
});

restartButton.addEventListener("click", () => {
    window.location.reload();
});

endRestartButton.addEventListener("click", () => {
    window.location.reload();
});

deathRestartButton.addEventListener("click", () => {
    window.location.reload();
});