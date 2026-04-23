class Player {
  constructor() {
    this.height = 30;
    this.width = 30;
    this.x = game.screenWidth / 2;
    this.y = game.screenHeight / 2;
    this.speed = 5;

    this.torchHeight = 120;
    this.torchWidth = 120;

    console.log("New Player enters the new game");
  }

  renderTorch(playerX, playerY) {
    this.torchElement = document.createElement("div");
    this.torchElement.style.height = this.torchHeight + "px";
    this.torchElement.style.width = this.torchWidth + "px";
    this.torchElement.style.position = "absolute";
    this.torchElement.style.left = playerX + "px";
    this.torchElement.style.top = playerY + "px";
    this.torchElement.classList.add("player-torch");

    document.querySelector("#game-map").appendChild(this.torchElement);
  }

  renderPlayer() {
    this.renderTorch(this.x, this.y);
    this.element = document.createElement("div");
    this.element.style.height = this.height + "px";
    this.element.style.width = this.width + "px";
    this.element.style.position = "absolute";
    this.element.style.left = this.x + "px";
    this.element.style.top = this.y + "px";
    this.element.classList.add("player-body");
    this.element.innerHTML = `
      <div>
      <img src="../img/link_straight.png" style="width:100%;height:100%;" alt="Key Image"/>
      </div>
      `;

    document.querySelector("#game-map").appendChild(this.element);

  }

  move(direction) {
    if (direction === "ArrowRight") {
      if (this.x >= game.screenWidth - this.width) {
        return this.x;
      } else {
        this.x += this.speed;
      }
    }
    if (direction === "ArrowLeft") {
      if (this.x <= 0) {
        return this.x;
      } else {
        this.x -= this.speed;
      }
    }
    if (direction === "ArrowUp") {
      if (this.y <= 0) {
        return this.y;
      } else {
        this.y -= this.speed;
      }
    }
    if (direction === "ArrowDown") {
      if (this.y >= game.screenHeight - this.height) {
        return this.y;
      } else {
        this.y += this.speed;
      }
    }
  }

  render() {
    const playerBody = document.querySelector(".player-body");
    playerBody.style.left = this.x + "px";
    playerBody.style.top = this.y + "px";

    const playerTorch = document.querySelector(".player-torch");
    playerTorch.style.left =
      this.x + this.width / 2 - this.torchWidth / 2 + "px";
    playerTorch.style.top =
      this.y + this.height / 2 - this.torchHeight / 2 + "px";
  }

  foundKey(key){
    const torchRect = this.torchElement.getBoundingClientRect();
    const keyRect = key.element.getBoundingClientRect();

    if (
      torchRect.left < keyRect.right &&
      torchRect.right > keyRect.left &&
      torchRect.top < keyRect.bottom &&
      torchRect.bottom > keyRect.top
    ) {
      return true;
    } else {
      return false;
    }
  }

  collectedKey(key) {
    const playerRect = this.element.getBoundingClientRect();
    const keyRect = key.element.getBoundingClientRect();

    if (
      playerRect.left < keyRect.right &&
      playerRect.right > keyRect.left &&
      playerRect.top < keyRect.bottom &&
      playerRect.bottom > keyRect.top
    ) {
      return true;
    } else {
      return false;
    }
  }
}
