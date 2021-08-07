// isPalindrome(input)
// input is a string
// output is true if the string forms a palindrome and false otherwise
// (the boolean true, not the string "true")
// for the purposes of this function, we're considering spaces,
// punctuation, etc. for determining if a palindrome is valid or not -
// the string must read exactly the same backwards as it does forwards
// "racecar" -> true
// "Racecar" -> false ("racecaR")
// "race car" -> false
// "tacocat" -> true
// "abba" -> true
// "abbba" -> true
// "abb ... bba" -> true
// "a" -> true (?)
// "" -> true
// "literally anything that is not a palindrome" -> false
// suggestion: no need to use .split()
// note: don't use .reverse() after .split()ing it into an array.
// because there's no need to use .split(). because strings are basically
// arrays of characters. there are times to use .split().
// this is not one of them.
// also note: this can end early
// "ab (100 billion characters) ca"
function isPalindrome(input) {
    var i = 0;
    while (i <= input.length) {
        // if (input.length == 1){
        //     return true;
        // }
        if (input[i] == input[input.length - i - 1]) {
            // console.log(input[i], " + ", input[input.length - i - 1])
            if (i < input.length / 2) {
                i++
            }
            else {
                return true;
            }
        }
        else {
            return false;
        }
    }
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("raceecar"));
console.log(isPalindrome("raceeecar"));
console.log(isPalindrome(""));
console.log(isPalindrome("a"));
console.log(isPalindrome("aa"));
console.log(isPalindrome("ab"));


// longestPalindrome(input)
// input is a string
// return the longest substring inside your input that is a palindrome
// "ehjgkkgeh" -> "gkkg"
// "ehjg kkgeh" -> "kk"
// "qwertttreqwerewy" -> "ertttre"
// "qwerttttttreqwerewy" -> "erttttttre"
// "abacabd" -> "bacab"
// "abacaed" -> "aba" or "aca"
// "abcde" -> "a" or "e", but probably "a"
// "a" -> "a" (lol)
// "" -> ""
// "racecar" -> "racecar"
// "I like to drive the racecar extremely fast! Vroom vroom!" -> "e racecar e"
// suggestion: don't use your previous isPalindrome function - at least,
// ideally not
// suggestion: .substring() ... ?

function longestPalindrome(string) {
    var currentLongest = '';

    for(var i=0; i<string.length; i++) {
        for (var j=i; j<string.length; j++) {
            var currentString = string.slice(i, j+!)
            if(isPalindrome(currentString) && currentString.length > currentLongest) {
                currentLongest = currentString;
            }
        }
    // return currentLongest;
}
