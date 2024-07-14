//Write a JavaScript program to sum the multiples of 3 and 5 under 1000.

// Function to sum multiples of 3 and 5 under a given limit
function sumMultiples(limit) {
    let sum = 0;

    // Iterate through numbers from 1 to limit - 1
    for (let i = 1; i < limit; i++) {
        // Check if current number is a multiple of 3 or 5
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i; // Add the number to the sum
        }
    }

    return sum;
}

// Define the limit (under 1000)
const limit = 1000;

// Calculate the sum of multiples of 3 and 5 under 1000
let result = sumMultiples(limit);

// Output the result
console.log(`The sum of multiples of 3 and 5 under ${limit} is: ${result}`);

