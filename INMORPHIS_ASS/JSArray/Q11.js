//Write a JavaScript program to find the sum of squares of a numeric vector.

function sumOfSquares(vector) {
    let sum = 0;

    // Iterate through each element of the vector
    for (let i = 0; i < vector.length; i++) {
        // Square each element and add to the sum
        sum += vector[i] * vector[i];
    }

    return sum;
}

// Sample vector (array of numbers)
let numericVector = [3, 7, 2, 8, 5];

// Calculate the sum of squares
let result = sumOfSquares(numericVector);

// Print the result
console.log("Sum of squares:", result); // Output: Sum of squares: 143
