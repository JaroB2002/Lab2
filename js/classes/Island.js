export default class Island {
  constructor(name, color, image) {
    this.name = name;
    this.color = color;
    this.image = image;
    this.element = null;
  }
    toJSON() {
      return {
        name: this.name,
        color: this.color,
        x: this.x,
        y: this.y,
      };
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
      islandElement.addEventListener('click', () => {
        this.color = this.getRandomColor();
        islandElement.style.backgroundColor = this.color
        const delay = Math.random() * 5; // delay is a random number between 0 and 5
        this.element.style.animation = `float 5s ease-in-out ${delay}s infinite`;
        const duration = Math.random() * 5 + 5; // duration is a random number between 5 and 10
        this.element.style.animation = `float ${duration}s ease-in-out infinite`;
        
        
      });
  
      this.element = islandElement;
    }
  }
  