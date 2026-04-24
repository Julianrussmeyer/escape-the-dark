class Door {
  constructor(screenWidth, screenHeight) {
    this.height = 40;
    this.width = 30;
    this.x = 0;
    this.y = 0;
    this.open = false;
    this.screenWidth = screenWidth;
    this.screenHeight = screenHeight;
  }

  placeDoor() {
    console.log("Placed Door")
    const padding = 50;
    this.x = Math.floor(Math.random() * (this.screenWidth - padding * 2)) + padding;
    this.y = Math.floor(Math.random() * (this.screenHeight - padding * 2)) + padding;

    this.element = document.createElement("img");
    this.element.style.height = this.height + "px";
    this.element.style.width = this.width + "px";
    this.element.style.position = "absolute";
    this.element.style.left = this.x + "px";
    this.element.style.top = this.y + "px";
    this.element.classList.add("door");
    this.element.src = "./img/door_closed.png";
    this.element.alt = "Door Image";

    document.querySelector("#game-map").appendChild(this.element);
  }

  openDoor(){
    this.element.src = "./img/door_open.png"
  }
}
