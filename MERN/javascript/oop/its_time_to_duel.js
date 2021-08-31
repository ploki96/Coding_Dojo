class Card{
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, resilience){
        super(name, cost)
        this.power = power;
        this.resilience = resilience;
    }
    attack(target){
        if(target instanceof Unit){
            target.resistance -= this.power;
        }else {
            throw new Error("Targets gotta be a unit")
        }
        
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude){
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    play(target){
        if(target instanceof Unit) {
            if (this.stat == 'resilience'){
                target.resilience += this.magnitude;
            } else {
                target.power += this.magnitude;
            }
        }else {
            throw new Error("Targets gotta be a unit");
        }
    }
}

const red_belt_ninja = new Unit("Red Belt Ninja", 3, 3, 4);
console.log(red_belt_ninja.name+" ", red_belt_ninja.cost+" ", red_belt_ninja.power+" ", red_belt_ninja.resilience);
const hard_algo = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", 3);
hard_algo.play(red_belt_ninja);
console.log(red_belt_ninja.name+" ", red_belt_ninja.cost+" ", red_belt_ninja.power+" ", red_belt_ninja.resilience);
const black_belt_ninja = new Unit("Black Belt Ninja", 4, 5, 4);
const unhandled_promise_rejection = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", -2);
unhandled_promise_rejection.play(red_belt_ninja);
console.log(red_belt_ninja.name+" ", red_belt_ninja.cost+" ", red_belt_ninja.power+" ", red_belt_ninja.resilience);
const pair_programming = new Effect("Pair Programming", 3, "increase target's power by 2", "power", 2)
pair_programming.play(red_belt_ninja);
console.log(red_belt_ninja.name+" ", red_belt_ninja.cost+" ", red_belt_ninja.power+" ", red_belt_ninja.resilience);
console.log(black_belt_ninja.name+" ", black_belt_ninja.cost+" ", black_belt_ninja.power+" ", black_belt_ninja.resilience)
red_belt_ninja.attack(black_belt_ninja);
console.log(black_belt_ninja.name+" ", black_belt_ninja.cost+" ", black_belt_ninja.power+" ", black_belt_ninja.resilience)


// Unit.(Effect.stat) += Effect.magnitude
