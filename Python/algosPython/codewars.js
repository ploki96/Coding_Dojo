// turns werw_wrw --> werwWew

function toCamelCase(input) {
var input2 = input;
var temp = 0;
var i = 0;
while (i <input2.length - 1) {
    if (temp = 1 && input2[i] != '-' && input2[i] != '_') {
        input2[i].toUpperCase();
        temp = 0;
        i++;
    }
    else if (input2[i] == '-' || input2[i] == "_") {
        input2[i].pop();
        temp = 1;
        i++;
    }
    else {
        i++;
    }
    }
return input2;
}



console.log(toCamelCase(''));
console.log(toCamelCase("the_stealth_warrior"));
console.log(toCamelCase("The-Stealth-Warrior"));
console.log(toCamelCase("A-B-C"));


