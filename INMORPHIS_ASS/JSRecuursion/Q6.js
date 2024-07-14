/*Write a JavaScript program to get the first n Fibonacci numbers.
Note : The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 
21, 34, . . . Each subsequent number is the sum of the previous two.*/

function generateFibonacci(n) {
    let fibonacci = [0, 1]; // Initialize the sequence with the first two Fibonacci numbers
    
    // Check if n is less than or equal to 0, return empty array
    if (n <= 0) {
        return [];
    }
    
    // Generate Fibonacci sequence
    for (let i = 2; i < n; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    
    return fibonacci.slice(0, n); // Return first n Fibonacci numbers
}

// Example usage:
let n = 10; // Number of Fibonacci numbers to generate
let fibonacciSequence = generateFibonacci(n);
console.log(`First ${n} Fibonacci numbers:`, fibonacciSequence); // Output: First 10 Fibonacci numbers: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
