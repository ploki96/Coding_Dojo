//given a string of words(with spaces),
//return an array of words
//no built in functions!!!
//"Did I shine my shoes today?" ->
//returns ["Did","I","shine","my","shoes","today?"]
//"two             words" -> ["two","words"]
const stringToWordArray = (str) => {
    arr = []
    word = ""
    for(let i = 0; i<str.length;i++){
        if (str[i] !== " "){
            word += str[i];
        }
        if (str[i] === " " && str[i+1] !== " "){
            // word += '"'
            arr.push(word);
            word = "";
        }

    }
    if (word.length > 0){
        arr.push(word);
    }
    
    return arr;
}

console.log(stringToWordArray("abc             def ghi"))

//write a function that, given a string of words(with spaces),
//returns a new string with words in reverse sequence.
//"This is a test" -> "test a is This"

const reverseWordOrder = (str) => {
    arr = []
    word = ""
    for(let i = 0; i<str.length;i++){
        if (str[i] !== " "){
            word += str[i];
        }
        if (str[i] === " " && str[i+1] !== " "){
            // word += '"'
            arr.push(word);
            word = "";
        }

    }
    if (word.length > 0){
        arr.push(word);
        word = ""
    }

    for (let i = arr.length - 1; i >=0; i--){
        word += arr[i];
        word += " ";
    }
    
    return word;
}

console.log(reverseWordOrder("This is a test"));