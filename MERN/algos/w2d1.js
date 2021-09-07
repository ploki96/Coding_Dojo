//Create a standalone function that accepts a string
//and an integer, and rotates the characters in the
//string to the right by that amount.
//this one must be done without built in methods
//("Did I shine my shoes today?", 9) ->
//"es today?Did I shine my shoe"
const rotateString = (str, num) => {
    runner = str.length - 1;
    while (num > 0) {
        if (runner > 0){
            temp = str[runner];
            str[runner] = str[runner - 1];
            str[runner - 1] = temp;
            runner--;
        }
        else {
            runner = str.length - 1;
            num--;
        }
    }
    return str;

    // var newStr = "";
    // for (var i = str.length - num; i< str.length; i++){
    //     newStr += str[i];
    // }
    // for (var j = 0; j < str.length - num; j++){
    //     newStr += str[j];
    // }

    // return newStr;

    // for (var i = str.length - 1; i >= str.length - 1 - num; i--){

    // }
}

let testString = "012345";
console.log(rotateString(testString, 3));
let shoes = "Did I shine my shoes today?";
console.log(rotateString(shoes, 9));

//write a function that will return true if str2 is a
//rotation of str1. otherwise return false
//("Did I shine my shoes today?", "es today?Did I shine my shoe")
// -> returns true
const isRotation = (str1, str2) => {
    if (str1.length !== str2.length){
        return false;
    }
    for (var i =0; i<str1.length; i++){
        let newStr = rotateString(str1, i);
        if(newStr === str2){
            return true;
        }
        }
    return false;
    }


console.log(isRotation("Did I shine my shoes today?", "es today?Did I shine my sho"));
console.log(isRotation("Did I shine my shoes today? ", "es today?Did I shine my sho"));

