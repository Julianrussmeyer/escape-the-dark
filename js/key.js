class Key {
    constructor(screenWidth, screenHeight) {
        this.x = 0;
        this.y = 0;
        this.height = 30;
        this.width = 20;
        this.screenWidth = screenWidth;
        this.screenHeight = screenHeight;
    }

    placeKey(){
    this.x = Math.floor(Math.random()*this.screenWidth)+1;
    this.y = Math.floor(Math.random()*this.screenHeight)+1;

    this.element = document.createElement("div");
    this.element.style.height = this.height + "px";
    this.element.style.width = this.width + "px";
    this.element.style.position = "absolute";
    this.element.style.left = this.x + "px";
    this.element.style.top = this.y + "px";
    this.element.classList.add("key-body");
    this.element.innerHTML = `
        <div>
        <img src="./img/key.png" style="width:100%;height:100%;" alt="Key Image"/>
        </div>
    `;

    document.querySelector("#game-map").appendChild(this.element);
    console.log(`A key was hidden at X:${this.x} Y:${this.y}`)
    }

    keyPickedUp(){
        this.element.remove()
    }

}