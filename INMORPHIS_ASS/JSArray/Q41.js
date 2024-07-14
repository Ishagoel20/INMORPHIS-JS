/*Write a JavaScript function to generate an array between two integers of 1 
step length.
Test Data :
console.log(rangeBetwee(4, 7));
[4, 5, 6, 7]
console.log(rangeBetwee(-4, 7));
[-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]*/

function rangeBetween(start, end) {
    let result = []; // Initialize an empty array
    
    // Determine the direction of iteration (ascending or descending)
    let step = start <= end ? 1 : -1;
    
    // Create the range array using a loop
    for (let i = start; i !== end + step; i += step) {
        result.push(i); // Add each integer to the array
    }
    
    return result;
}

// Test data
console.log(rangeBetween(4, 7)); // Output: [4, 5, 6, 7]
console.log(rangeBetween(-4, 7)); // Output: [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]
