import Island from "./Island.js";

class World {
  constructor() {
    this.islands = [];
    this.islandCount = 0;
    this.hookEvents();
  }

  hookEvents() {
    const addButton = document.getElementById("btnAddIsland");
    addButton.addEventListener("click", () => {
      const island = new Island(this.getRandomName());
      this.addIsland(island);
    });

    const saveButton = document.getElementById("btnSave");
    saveButton.addEventListener("click", () => {
      this.save();
    });

    const loadButton = document.getElementById("btnLoad");
    loadButton.addEventListener("click", () => {
      this.load();
    });
  }

  save() {
    const islands = this.islands.map(island => island.toJSON());
    localStorage.setItem('world', JSON.stringify(islands));
    localStorage.setItem('islandCount', this.islandCount); // save the counter

  }

  load() {
    const storedIslands = JSON.parse(localStorage.getItem('world'));
    if (storedIslands) {
      this.islands = storedIslands.map(island => {
        const newIsland = new Island(island.name, island.color);
        newIsland.setPosition(island.x, island.y);
        newIsland.addToDOM();
        return newIsland;
      });
    }
    this.islandCount = Number(localStorage.getItem('islandCount')) || 0; // load the counter
    this.updateCounterDisplay(); // update the counter display
  }


  getCoordinates() {
    let randomSignX = Math.random() < 0.5 ? -1 : 1; // Voor x-coördinaat
    let randomSignY = Math.random() < 0.5 ? -1 : 1; // Voor y-coördinaat
    return {
      x: ((Math.random() * window.innerWidth) / 2) * randomSignX + window.innerWidth / 2,
      y: ((Math.random() * window.innerHeight) / 2) * randomSignY + window.innerHeight / 2,
    };
  }
  

  addIsland(island) {
    const coordinates = this.getCoordinates();
    island.setPosition(coordinates.x, coordinates.y);
    this.islands.push(island);
    island.addToDOM();
    this.islandCount++; // increment the counter
    this.updateCounterDisplay();
    }

    updateCounterDisplay() {
      const counterElement = document.getElementById("counter");
      counterElement.textContent = `Islands added: ${this.islandCount}`;
    }  

  getRandomName() {
    const names = [
      "Palmtree beach",
      "Sandy beach",
      "Tropical beach",
      "Palm beach",
      "Sunny beach",
      "Paradise beach",
      "Sunny island",
      "Tropical island",
      "Palm island",
      "Paradise island",
    ];
    return names[Math.floor(Math.random() * names.length)];
  }
}

const world = new World();
