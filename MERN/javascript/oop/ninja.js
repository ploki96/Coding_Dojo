class Ninja {
    constructor(name, health=50, speed=3, strength=3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName() {
        console.log("Ninja name: "+this.name);
    }
    showStats() {
        this.sayName();
        console.log("Ninja health: "+this.health);
        console.log("Ninja speed: "+this.speed);
        console.log("Ninja strength: "+this.strength);
    }
    drinkSake() {
        console.log(this.health);
        this.health += 10;
        console.log(this.health);
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();