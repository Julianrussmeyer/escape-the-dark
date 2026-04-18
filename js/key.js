class Key {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.height = 10;
        this.width = 10;
    }

    placeKey(){
    this.x = Math.floor(Math.random()*1920)+1;
    this.y = Math.floor(Math.random()*1080)+1;

    this.element = document.createElement("div");
    this.element.style.height = this.height + "px";
    this.element.style.width = this.width + "px";
    this.element.style.position = "absolute";
    this.element.style.left = this.x + "px";
    this.element.style.top = this.y + "px";
    this.element.classList.add("key-body");

    document.querySelector("#game-screen").appendChild(this.element);
    console.log(`A key was hidden at X:${this.x} Y:${this.y}`)
    }

}