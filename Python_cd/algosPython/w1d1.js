// reverseString(input) - your input is a string, and the output
// of the function should be that string, but backwards
// this will be a new string, as strings are immutable
// don't use any built-in functions for reversing a string/array
// in fact, turning the string into an array is unnecessary
// "hello" as your input should return "olleh"
// "Hello!" -> "!olleH"
// "I like to pet cats..." -> "...stac tep ot ekil I"
// "a" -> "a"
// "" -> ""

// function reverseString(input) {
//     var newString = "";
//     for (var i = 0; i<input.length; i++) {
//         newString[i] = input[input.length - i - 1];
//     }
//     return newString;
// }

// var x = "hello!";
// console.log(reverseString(x));

function reverseString(input) {
    var newString = "";
    for (var i = input.length - 1; i >=0; i--) {
        newString += input[i];
    }
    return newString;
}

var x = "hello!";
console.log(reverseString(x));