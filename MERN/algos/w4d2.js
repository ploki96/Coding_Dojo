//given an integer, return a string representing the 
//hexadecimal value
// We miss ya Ryan Magley
//given 108, return "6C"
const decToHexStr = (val) => {
    var output = "";
    var hex = {1:1, 2:2, 3:3, 4:4, 5:5, 6:6, 7:7, 8:8, 9:9, 10: 'A', 11: 'B', 12:'C', 13:'D', 14: 'E', 15: 'F'};
    while (val){
        
        output = hex[val % 16] + output;
        val = Math.floor(val / 16);
    }
    return output;
}
console.log(decToHexStr(108))

//take in a string representing an int in hexadecmial
//notation and return the value in deciaml notation
//given "1D2", return 466
// A = 10
// B = 11
// C = 12
// D = 13
// E = 14
// F = 15
const hexStrToDec = (str) => {
    var hex = {'A': 10, 'B': 11, 'C':12, 'D':13, 'E': 14, 'F': 15};
    var sum = 0;
    var exponent = 0;
    for (var i = str.length - 1; i >= 0; i--) { 
        if(isNaN(str[i])){
            sum += Math.pow(16, exponent) * hex[str[i]]
        }
        else {
        sum += Math.pow(16, exponent) * parseInt(str[i]);
        }
        exponent++;
    }
return sum;
}

console.log(hexStrToDec('1D2'))