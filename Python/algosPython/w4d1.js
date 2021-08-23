// do these recursively, alright?

// factorial(n) - return factorial n, i.e. n * n - 1 * n - 2 ...  * 1
// written out as n!
// factorial(5) -> 120  (5 * 4 * 3 * 2 * 1)
// factorial(6) -> 720  (6 * 5 * 4 * 3 * 2 * 1)
function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}


// console.log(factorial(5))

// fibonacci(n)
// return the nth number in the Fibonacci sequence
// https://en.wikipedia.org/wiki/Fibonacci_number
// fibonacci(0) -> 0
// fibonacci(1) -> 1
// fibonacci(2) -> 1
// fibonacci(3) -> 2
// fibonacci(4) -> 3
// fibonacci(5) -> 5
// fibonacci(6) -> 8
// keep n less than like, 30

function fibonacci(n) {
    if (n <= 0) {
        return 0;
    }
    if (n == 1) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);

}

console.log(fibonacci(6));