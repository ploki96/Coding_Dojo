// Create a function called pizzaOven that returns a JavaScript (Pizza) Object

function pizzaFactory(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.bread = crustType;
    pizza.protein = sauceType;
    pizza.cheese = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

// Create a pizza with: "deep dish", "traditional", ["mozzarella"], and ["pepperoni", "sausage"]

var pizza1 = pizzaFactory("deep dish", "traditional", ["mozzerella"], ["pepperoni", "sausage"]);

console.log (pizza1);

// Create a pizza with: "hand tossed", "marinara", ["mozzarella", "feta"], and ["mushrooms", "olives", "onions"]

var pizza2 = pizzaFactory("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);

console.log(pizza2);

// Create 2 more pizzas with any toppings we like!

var pizza3 = pizzaFactory("thin crust", "marinara", ["mozzarella", "feta", "goat"], ["ham", "mushrooms", "pepperoni"]);

var pizza4 = pizzaFactory("hand tossed", "ranch", ["mozzarella", "feta"], ["olives", "chicken", "onions"]);

