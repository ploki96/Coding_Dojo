//create a function that accepts a string representing an int
//in binary notation, and returns the int
//you do not need to use parseInt
//should return integer >= 0

//given "1010101", return 85
//given "100011", return 35

const binToDec = (str) => {
    var sum = 0;
    for (var i = 0; i<str.length;i++){
        if (str[i] === '1'){
            sum += Math.pow(2, (str.length - i - 1))
        }
    }
    return sum;
}

// console.log(binToDec("1010101"))
console.log(binToDec("1000"))

console.log(Math.ceil(Math.random()*10)+ 1);