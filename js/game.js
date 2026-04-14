class Game {
  constructor() {
    this.startScreen = document.querySelector("#start-screen");
    this.gameScreen = document.querySelector("#game-screen");
    this.endScreen = document.querySelector("#end-screen");
    this.gameContainer = document.querySelector("#game-container");
    this.height = 600;
    this.width = 500;
  }

  start() {
    this.gameScreen.style.height = this.height + "px";
    this.gameScreen.style.width = this.width + "px";
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "block";
    this.gameScreen.style.margin = "auto";

    this.player = new Player();
    this.player.renderPlayer();

    this.keysPressed = {};

    this.handleKeyDown = (e) => { this.keysPressed[e.key] = true; };
    this.handleKeyUp = (e) => { this.keysPressed[e.key] = false; };
    document.addEventListener("keydown", this.handleKeyDown);
    document.addEventListener("keyup", this.handleKeyUp);

    this.intervalID = setInterval(() => {
      this.gameLoop();
    }, 1000 / 60);
  }

  gameLoop() {
    if (this.keysPressed["ArrowRight"]) {
      this.player.move("ArrowRight");
    }
    if (this.keysPressed["ArrowLeft"]) {
      this.player.move("ArrowLeft");
    }
    if (this.keysPressed["ArrowUp"]) {
      this.player.move("ArrowUp");
    }
    if (this.keysPressed["ArrowDown"]) {
      this.player.move("ArrowDown");
    }
    this.player.render();
  }

  end() {
    this.gameScreen.style.display = "none";
    this.endScreen.style.display = "block";
    clearInterval(this.intervalID);
    document.removeEventListener("keydown", this.handleKeyDown);
    document.removeEventListener("keyup", this.handleKeyUp);
  }
}
