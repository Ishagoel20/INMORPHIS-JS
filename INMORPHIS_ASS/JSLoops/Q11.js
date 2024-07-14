//Write a JavaScript program to compute the greatest common divisor (GCD) of two positive integers.

// Function to compute the Greatest Common Divisor (GCD) using Euclidean algorithm
function gcd(a, b) {
    // Base case
    if (b === 0) {
        return a;
    }

    // Recursive case
    return gcd(b, a % b);
}

// Example usage:
let num1 = 24;
let num2 = 36;

// Compute the GCD of num1 and num2
let result = gcd(num1, num2);

// Output the result
console.log(`The GCD of ${num1} and ${num2} is: ${result}`);
