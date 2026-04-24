class Ghost {
  constructor(screenWidth, screenHeight) {
    this.x = 0;
    this.y = 0;
    this.height = 70;
    this.width = 70;
    this.screenWidth = screenWidth;
    this.screenHeight = screenHeight;
    this.speed = 1;
    this.direction = "down";
  }

  placeGhost() {
    this.x = Math.floor(Math.random() * this.screenWidth) + 1;
    this.y = Math.floor(Math.random() * this.screenHeight) + 1;

    this.element = document.createElement("img");
    this.element.style.height = this.height + "px";
    this.element.style.width = this.width + "px";
    this.element.style.position = "absolute";
    this.element.style.left = this.x + "px";
    this.element.style.top = this.y + "px";
    this.element.classList.add("ghost");
    this.element.src = "./img/ghost.png";
    this.element.alt = "Ghost Image";

    document.querySelector("#game-map").appendChild(this.element);

    const directions = ["up", "down", "left", "right"];


    this.intervalID = setInterval(() => {
      this.direction = directions[Math.floor(Math.random() * directions.length)];
    }, 500);
  }

  move(direction) {
    if (direction === "right") {
      if (this.x >= game.screenWidth - this.width) {
        return this.x;
      } else {
        this.x += this.speed;
      }
    }
    if (direction === "left") {
      if (this.x <= 0) {
        return this.x;
      } else {
        this.x -= this.speed;
      }
    }
    if (direction === "up") {
      if (this.y <= 0) {
        return this.y;
      } else {
        this.y -= this.speed;
      }
    }
    if (direction === "down") {
      if (this.y >= game.screenHeight - this.height) {
        return this.y;
      } else {
        this.y += this.speed;
      }
    }
    this.element.style.left = this.x + "px";
    this.element.style.top = this.y + "px";
  }
}
