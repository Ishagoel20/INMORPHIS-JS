/*Write a JavaScript program to calculate the factorial of a number.
In mathematics, the factorial of a non-negative integer n, denoted by n!, is the 
product of all positive integers less than or equal to n. For example, 5! = 5 x 4 x 3 
x 2 x 1 = 120*/

function factorialIterative(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Example usage:
let number = 5;
let factorial = factorialIterative(number);
console.log(`Factorial of ${number} is: ${factorial}`); // Output: Factorial of 5 is: 120
