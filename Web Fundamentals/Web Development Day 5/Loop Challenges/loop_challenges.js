/*
1. Print odds 1-20
    Using a loop write code that will console.log all of the odd values from 1 up to 20.
2. Decreasing Multiples of 3
    Using a loop write code that will console.log all of the values that are evenly divisible by 3 from 100 down to 0.
3. Print the sequence
    Using a loop write code that will console.log the values in this sequence 4, 2.5, 1, -0.5, -2, -3.5.
4. Sigma
    Write code that will add all of the values from 1-100 onto some variable sum and at the end console.log the result 1 + 2 + 3 + ... + 98 + 99 + 100. We should get back 5050 at the end.
5. Factorial
    Write code that will multiply all of the values from 1-12 onto some variable product and at the end console.log the result 1 * 2 * 3 * ... * 10 * 11 * 12. We should get back 479001600 at the end.
*/

// 1. Print odds 1-20
for (var i=1;i<=20;i+=2){
    console.log(i);
}

// 2. Decreasing Multiples of 3
for (var i=0; i<=100;i++) {
    if (i%3==0) {
        console.log(i);
    }
}

// 3. Print the sequence
for (var i=4; i>=-3.5; i-=1.5) {
    console.log(i);
}

// 4. Sigma
var sum = 0;
var string = "";

for (var i=1; i<=100;i++) {
    if (i<100) {
        sum+=i;
        string += (i + " + ");
    }
    else {
        sum+=i;
        string += (i + " = " + sum);
    }
}

console.log(string);
console.log("sum = " + sum);

// 5. Factorial

var product = 1;
var string2 = "";
for (var i=1; i<=12;i++) {
    if (i<12) {
        product*=i;
        string2 += (i + " * ");
    }
    else {
        product*=i;
        string2 += (i + " = " + product);
    }
}

console.log(string2);
console.log("product = " + product);

