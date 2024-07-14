/*Write a JavaScript function to generate an array of specified length, filled with 
integer numbers, increase by one from starting position.
Test Data :
console.log(array_range(1, 4));
[1, 2, 3, 4]
console.log(array_range(-6, 4));
[-6, -5, -4, -3]*/

function array_range(start, length) {
    let result = []; // Initialize an empty array
    
    for (let i = 0; i < length; i++) {
        result.push(start + i); // Add elements to the array starting from 'start' and incrementing by 1
    }
    
    return result;
}

// Test data
console.log(array_range(1, 4)); // Output: [1, 2, 3, 4]
console.log(array_range(-6, 4)); // Output: [-6, -5, -4, -3]
