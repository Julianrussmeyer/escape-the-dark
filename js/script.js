const startButton = document.querySelector("#start-button");
const endButton = document.querySelector("#end-button");
const restartButton = document.querySelector("#restart-button");

let game;

startButton.addEventListener("click", () => {
    game = new Game(800,600);
    game.start();
});

endButton.addEventListener("click", () => {
    game.end();
});

restartButton.addEventListener("click", () => {
    window.location.reload();
});