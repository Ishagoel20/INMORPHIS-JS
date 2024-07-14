//Write a JavaScript program to find the sum of squares of a numeric vector.

function sumOfSquares(vector) {
    // Using reduce to calculate sum of squares
    const sum = vector.reduce((acc, currentValue) => acc + currentValue ** 2, 0);
    return sum;
}

// Sample vector (array of numbers)
const numericVector = [3, 7, 2, 8, 5];

// Calculate the sum of squares
const result = sumOfSquares(numericVector);

// Print the result
console.log("Sum of squares:", result); // Output: Sum of squares: 187
