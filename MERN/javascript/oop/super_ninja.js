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

class Sensei extends Ninja {
    constructor(name, wisdom = 10) {
        super(name, 200, 10, 10);
        this.wisdom = wisdom;

    }
    speakWisdom(){
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();
