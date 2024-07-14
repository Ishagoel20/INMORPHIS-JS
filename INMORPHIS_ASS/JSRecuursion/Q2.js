//Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.

function findGCD(a, b) {
    // Ensure positive integers
    a = Math.abs(a);
    b = Math.abs(b);
    
    // Apply Euclidean algorithm
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    
    // GCD is stored in a
    return a;
}

// Example usage:
let num1 = 24;
let num2 = 36;
let gcd = findGCD(num1, num2);
console.log(`The GCD of ${num1} and ${num2} is: ${gcd}`); // Output: The GCD of 24 and 36 is: 12
