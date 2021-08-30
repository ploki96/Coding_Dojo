// binarySearch(input, target ... ?)
// given an input (a array of sorted integers) and a target value to search for
// return true if the value is found in the array and false otherwise
// we gotta do this recursively!
// max of 4 parameters - any extras should have a default
// this will have a big O time complexity of log n
// https://www.bigocheatsheet.com/
// remeber - ctrl-C to break a running program


function binarySearch(input, target) {
    var mid = Math.floor(input.length / 2)
    if (target < input[0] || target > input[input.length - 1]){
        console.log(target);
        return false
    }
    
    else if (target == input[mid]) {
        console.log(target);
        return true
    }
    else if (target < input[mid] && input.length > 1) {
        var leftSide = input.slice(0, mid)
        return binarySearch(leftSide, target)
    }
    else if (target > input[mid] && input.length > 1) {
        var rightSide = input.slice(mid, input.length)
        return binarySearch(rightSide, target)
    }
    else if (target != input[mid]) {
        console.log(target);
        return false
        
    }
}

// var testArray = [1, 2, 4, 5, 6, 7, 8, 10, 11, 13, 14, 16, 17, 18, 20];
var testArray = [21, 22, 24, 25, 26, 27, 28, 30, 31, 43, 44, 56, 57, 68, 70];

console.log(binarySearch(testArray, -1)); // returns false
console.log(binarySearch(testArray, 54)); // returns false
console.log(binarySearch(testArray, 38)); // returns false
console.log(binarySearch(testArray, 39)); // returns false
console.log(binarySearch(testArray, 32)); // returns false
console.log(binarySearch(testArray, 45)); // returns false
console.log(binarySearch(testArray, 49)); // returns false

console.log(binarySearch(testArray, 21)); // returns true
console.log(binarySearch(testArray, 22)); // returns true
console.log(binarySearch(testArray, 24)); // returns true
console.log(binarySearch(testArray, 25)); // returns true
console.log(binarySearch(testArray, 26)); // returns true
console.log(binarySearch(testArray, 27)); // returns true
console.log(binarySearch(testArray, 28)); // returns true
console.log(binarySearch(testArray, 30)); // returns true
console.log(binarySearch(testArray, 31)); // returns true
console.log(binarySearch(testArray, 43)); // returns true
console.log(binarySearch(testArray, 44)); // returns true
console.log(binarySearch(testArray, 56)); // returns true
console.log(binarySearch(testArray, 57)); // returns true
console.log(binarySearch(testArray, 68)); // returns true
console.log(binarySearch(testArray, 70)); // returns true