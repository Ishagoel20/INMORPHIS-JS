/* Write a JavaScript function to get the first element of an array. Passing a 
parameter 'n' will return the first 'n' elements of the array.
Test Data :
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
Expected Output :
7
[]
[7, 9, 0]
[7, 9, 0, -2]
[]*/

// Function to get the first n elements of an array
function first(arr, n = 1) {
    // Return the first element if n is not specified or 1
    if (n >= 0) {
        return arr.slice(0, n);
    } else {
        return arr;
    }
}

// Test Data
console.log(first([7, 9, 0, -2]));     // [7]
console.log(first([], 3));            // []
console.log(first([7, 9, 0, -2], 3));  // [7, 9, 0]
console.log(first([7, 9, 0, -2], 6));  // [7, 9, 0, -2]
console.log(first([7, 9, 0, -2], -3)); // []
