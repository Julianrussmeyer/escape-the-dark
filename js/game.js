class Game {
  constructor(screenWidth, screenHeight) {
    this.startScreen = document.querySelector("#start-screen");
    this.gameScreen = document.querySelector("#game-screen");
    this.gameMap = document.querySelector("#game-map");
    this.endScreen = document.querySelector("#end-screen");
    this.deathScreen = document.querySelector("#death-screen");
    this.screenWidth = screenWidth;
    this.screenHeight = screenHeight;
    this.backgroundMusic = new Audio("./sounds/background_music_looped.wav");
  }

  start() {
    this.backgroundMusic.volume = 0.35;
    this.backgroundMusic.play();
    this.gameMap.style.width = this.screenWidth + "px";
    this.gameMap.style.height = this.screenHeight + "px";
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "block";
    this.gameScreen.style.margin = "auto";

    this.player = new Player();
    this.player.renderPlayer();

    this.keysPressed = {};

    this.handleKeyDown = (e) => {
      this.keysPressed[e.key] = true;
    };
    this.handleKeyUp = (e) => {
      this.keysPressed[e.key] = false;
    };
    document.addEventListener("keydown", this.handleKeyDown);
    document.addEventListener("keyup", this.handleKeyUp);

    this.intervalID = setInterval(() => {
      this.gameLoop();
    }, 1000 / 60);

    this.key = new Key(this.screenWidth, this.screenHeight);
    this.key.placeKey();

    this.door = new Door(this.screenWidth, this.screenHeight);
    this.door.placeDoor();

    this.ghosts = [];
    for (let i = 0; i < 4; i++) {
      const ghost = new Ghost(this.screenWidth, this.screenHeight);
      ghost.placeGhost();
      this.ghosts.push(ghost);
    }
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

    this.ghosts.forEach(ghost => ghost.move(ghost.direction));

    const foundKey = this.player.isInTorchRange(this.key);
    if (foundKey) {
      console.log("Key found!!");
      this.key.element.style.visibility = "visible";
    } else {
      this.key.element.style.visibility = "hidden";
    }

    const collectedKey = this.player.isColliding(this.key);
    if (collectedKey) {
      this.player.hasKey = true;
      this.door.openDoor();
      this.key.keyPickedUp();
    }
    const foundDoor = this.player.isInTorchRange(this.door);
    if (foundDoor) {
      console.log("Door found!!");
      this.door.element.style.visibility = "visible";
    } else {
      this.door.element.style.visibility = "hidden";
    }

    const doorUsed = this.player.isColliding(this.door);
    if (doorUsed && this.player.hasKey) {
      this.end();
    }

    this.ghosts.forEach(ghost => {
      if (this.player.isInTorchRange(ghost)) {
        ghost.element.style.visibility = "visible";
      } else {
        ghost.element.style.visibility = "visible";
      }
    });

    const ghostCollision = this.ghosts.some(ghost => this.player.isColliding(ghost));
    if (ghostCollision) {
      this.death();
    }
  }

  end() {
    this.gameScreen.style.display = "none";
    this.endScreen.style.display = "block";
    clearInterval(this.intervalID);
    document.removeEventListener("keydown", this.handleKeyDown);
    document.removeEventListener("keyup", this.handleKeyUp);
  }

  death() {
    this.gameScreen.style.display = "none";
    this.deathScreen.style.display = "block";
    clearInterval(this.intervalID);
    document.removeEventListener("keydown", this.handleKeyDown);
    document.removeEventListener("keyup", this.handleKeyUp);
  }
}
