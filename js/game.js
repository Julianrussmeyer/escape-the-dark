class Game {
  constructor(screenWidth, screenHeight) {
    this.startScreen = document.querySelector("#start-screen");
    this.gameScreen = document.querySelector("#game-screen");
    this.endScreen = document.querySelector("#end-screen");
    this.gameContainer = document.querySelector("#game-container");
    this.screenWidth = screenWidth;
    this.screenHeight = screenHeight;
  }

  start() {
    this.gameScreen.style.width = this.screenWidth + "px";
    this.gameScreen.style.height = this.screenHeight + "px";
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

    this.key = new Key(this.screenWidth, this.screenHeigh)
    this.key.placeKey()
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

    const foundKey = this.player.foundKey(this.key)
    if(foundKey){
      console.log("Key found!!")
      this.key.element.style.visibility = "visible";
    } else {
      this.key.element.style.visibility = "hidden";
    }

    const collectedKey = this.player.collectedKey(this.key)
    if (collectedKey){
      this.end()
    }

  }

  end() {
    this.gameScreen.style.display = "none";
    this.endScreen.style.display = "block";
    clearInterval(this.intervalID);
    document.removeEventListener("keydown", this.handleKeyDown);
    document.removeEventListener("keyup", this.handleKeyUp);
  }
}
