//You are given a string that may contain sequences of consecutive characters.
//Create a function to shorten a string by including the character, then the 
//number of times it appears. For "aaaabbcddd" return "a4b2c1d3"
//no built in functions!!!! parseInt() is ok
const encode = (str) => {
    var output = {};
    var str2 = "";
    for (var i=0;i<str.length;i++){
        if(output[str[i]] === undefined) {
            output[str[i]] = 1;
        }
        else {
            output[str[i]]++;
        }
    }

    for (const property in output) {
        str2 += property;
        str2 += parseInt(output[property])
    }
    return str2;

}

console.log(encode("aaabbcccc"));
console.log(encode("ddddeeeeeffgggg"));
console.log(encode("aaaaabbbbbbbc"));
console.log(encode("bb"));

//given an encoded string, decode and return it
//given "a3b2c1d3" return "aaabbcddd"
//parseInt() is ok
//special note: can your function handle "g14f12"?
const decode = (str) => {
    var num = '';
    var numcount = 0;
    var runner = 0;
    var letter = '';
    var output = '';
    while (runner < str.length) {
        if (isNaN(str[runner])) {
            letter = str[runner]
            runner++;
        }
        else if (!isNaN(str[runner])){
            num+= str[runner];
            runner++;
            if(!isNaN(str[runner])) {
                num+= str[runner];
                runner++;
            }
        }
        if (num != '' && letter != '') {
            numcount = parseInt(num);
            // console.log (numcount, " ", num, " ", letter)
            for (var i=0; i<numcount; i++) {
                output += letter;
                // console.log(output);
            }
            num = '';
            numcount = 0;
            letter = '';
        }
    }
    return output;
}

console.log(decode("a3b2c4"));
console.log(decode("t2h10j4"));