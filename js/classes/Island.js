export default class Island {
    constructor(name, color) {
      this.name = name;
      this.color = color;
      this.element = null;
    }
  
    getRandomColor() {
      return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }
  
    setPosition(x, y) {
      this.x = x;
      this.y = y;
    }z
  
    addToDOM() {
      const islandElement = document.createElement("div");
      islandElement.className = "island";
      islandElement.style.backgroundColor = this.color;
      islandElement.style.left = `${this.x}px`;
      islandElement.style.top = `${this.y}px`;
      islandElement.textContent = this.name;
      document.getElementById("app").appendChild(islandElement);
      this.element = islandElement;
    }
  }
  