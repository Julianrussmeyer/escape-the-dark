class Player {
  constructor() {
    this.height = 100;
    this.width = 100;
    this.color = "pink";
    this.x = 100;
    this.y = 100;
    this.speed = 10;

    console.log("New Player enters the new game");
  }

  renderPlayer() {
    const playerBody = document.createElement("div");
    playerBody.style.height = this.height + "px";
    playerBody.style.width = this.width + "px";
    playerBody.style.background = this.color;
    playerBody.style.position = "absolute";
    playerBody.style.left = this.x + "px";
    playerBody.style.top = this.y + "px";
    playerBody.classList.add("player-body");

    document.querySelector("#game-screen").appendChild(playerBody);
  }

  move(direction) {
    if (direction === "ArrowRight"){
        this.x += this.speed
        console.log("Going right, sir")
    } 
    if(direction === "ArrowLeft") {
        this.x -= this.speed
        console.log("Going left, sir")
    } 
    if(direction === "ArrowUp"){
        this.y -= this.speed
        console.log("Going up, sir")
    }
    if(direction === "ArrowDown"){
        this.y += this.speed
        console.log("Going down, sir")
    }
  }

  render() {
    const playerBody = document.querySelector(".player-body");
    playerBody.style.left = this.x + "px";
    playerBody.style.top = this.y + "px";
  }
}
