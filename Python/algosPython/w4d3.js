// inOrderCombinations(input, output, ...?)
// input is a string
// return an array with all strings you could make with the characters from the
// given input, in the order that they're presented - this is your output
// (output array order doesn't matter)
// "abc" -> ["", "c", "b", "bc", "a", "ac", "ab", "abc"] (8)
// "zhk" -> ["", "z", "h", "k", "hk", "zh", "zk", "zhk"] (8)
// "hjj" -> ["", "h", "j", "j", "hj", "hj", "jj", "hjj"]
// "tkps" -> ["", "t", "k", "p", "s", "tk", "tp", "// inOrderCombinations(input, output, ...?)
// input is a string
// return an array with all strings you could make with the characters from the
// given input, in the order that they're presented - this is your output
// (output array order doesn't matter)
// "abc" -> ["", "c", "b", "bc", "a", "ac", "ab", "abc"] (8)
// "zhk" -> ["", "z", "h", "k", "hk", "zh", "zk", "zhk"] (8)
// "hjj" -> ["", "h", "j", "j", "hj", "hj", "jj", "hjj"]
// "tkps" -> ["", "t", "k", "p", "s", "tk", "tp", "ts", "kp", "ks", "ps",
// "tkp", "tks", "tps", "kps", "tkps"] (16)
// input of length n leads to 2^n output elements
// every character in the output appears with equal occurance
// test with at least 4 characters in input
// make sure to use recursion
// don't forget a base case to end recursion
//
// your parameters... maybe three, maybe four?
// suggestions:
// a parameter to keep track of which letter you're looking at?
// a parameter to keep track of the string you're building from call to call?
// other parameters probably have a default too

// inOrderCombinations(input, output, ...?)
// input is a string
// return an array with all strings you could make with the characters from the
// given input, in the order that they're presented - this is your output
// (output array order doesn't matter)
// "abc" -> ["", "c", "b", "bc", "a", "ac", "ab", "abc"] (8)
// "zhk" -> ["", "z", "h", "k", "hk", "zh", "zk", "zhk"] (8)
// "hjj" -> ["", "h", "j", "j", "hj", "hj", "jj", "hjj"]
// "tkps" -> ["", "t", "k", "p", "s", "tk", "tp", "ts", "kp", "ks", "ps",
// "tkp", "tks", "tps", "kps", "tkps"] (16)
// input of length n leads to 2^n output elements
// every character in the output appears with equal occurance
// test with at least 4 characters in input
// make sure to use recursion
// don't forget a base case to end recursion
//
// your parameters... maybe three, maybe four?
// suggestions:
// a parameter to keep track of which letter you're looking at?
// a parameter to keep track of the string you're building from call to call?
// other parameters probably have a default too

function inOrderCombinations(input, output = [], position = 0, partial = '') {

    if (position == input.length) {
        output.push(partial);
    }

    // else {
    //     var added_string = partial + input[position];
    //     var other_string = partial + '';
    
    //     inOrderCombinations(input, output, position + 1, other_string);
    //     inOrderCombinations(input, output, position + 1, added_string);
    // }

    else {    
        inOrderCombinations(input, output, position + 1, partial + input[position]);
        inOrderCombinations(input, output, position + 1, partial);
    }

    return output;    
}

// var x = inOrderCombinations('tkpsi')
// console.log(x);
// console.log(x.length == 32);

function inOrderSubsets(str, solutions = [], partial = "") {
    solutions.push(partial);

    for (let i = 0; i < str.length; i++) {
    const sliced = str.slice(i + 1);
    inOrderSubsets(sliced, solutions, partial + str[i]);
    }

    return solutions;
}

var x = inOrderSubsets('tkpsi')
console.log(x);
console.log(x.length == 32);

var x = inOrderCombinations('tkps')
console.log(x.length == 16);
// "tkp", "tks", "tps", "kps", "tkps"] (16)
// input of length n leads to 2^n output elements
// every character in the output appears with equal occurance
// test with at least 4 characters in input
// make sure to use recursion
// don't forget a base case to end recursion
//
// your parameters... maybe three, maybe four?
// suggestions:
// a parameter to keep track of which letter you're looking at?
// a parameter to keep track of the string you're building from call to call?
// other parameters probably have a default too

function inOrderCombinations(input, output = []) {
    if (output.length == 0) {
        output.push("");
    }
    if (output.length < input.length + 1) {
        output.push(input[output.length - 1])
    }

    // return output;    
}

var x = inOrderCombinations('tkps')
console.log(x.length == 16);