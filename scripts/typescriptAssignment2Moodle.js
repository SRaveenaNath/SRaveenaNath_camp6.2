"use strict";
// Astronaut Class
class Astronaut {
    constructor(massKg, name) {
        this.massKg = massKg;
        this.name = name;
    }
}
// Cargo Class
class Cargo {
    constructor(massKg, material) {
        this.massKg = massKg;
        this.material = material;
    }
}
// Rocket Class
class Rocket {
    constructor(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    // Helper method to sum the mass of items
    sumMass(items) {
        return items.reduce((total, item) => total + item.massKg, 0);
    }
    // Returns the current mass of the rocket
    currentMassKg() {
        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
    }
    // Check if an item can be added based on current mass
    canAdd(item) {
        return this.currentMassKg() + item.massKg <= this.totalCapacityKg;
    }
    // Add cargo if it fits within the capacity
    addCargo(cargo) {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        return false;
    }
    // Add astronaut if it fits within the capacity
    addAstronaut(astronaut) {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        return false;
    }
}
// Example usage in a simulation 
const rocket = new Rocket("Apollo", 10000);
// Create astronauts
const astronaut1 = new Astronaut(75, "Tina");
const astronaut2 = new Astronaut(80, "Reena");
// Create cargo
const cargo1 = new Cargo(200, "Food Supplies");
const cargo2 = new Cargo(500, "Scientific Equipment");
// Add astronauts and cargo to the rocket
console.log(rocket.addAstronaut(astronaut1)); // true
console.log(rocket.addAstronaut(astronaut2)); // true
console.log(rocket.addCargo(cargo1)); // true
console.log(rocket.addCargo(cargo2)); // true
// Check the current mass and remaining capacity
console.log("Current Mass:", rocket.currentMassKg()); // sum of astronauts' and cargo's mass
console.log("Can add more cargo?", rocket.canAdd(new Cargo(1000, "Water Supplies"))); // depends on remaining capacity
