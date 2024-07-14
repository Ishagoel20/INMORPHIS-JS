/*Write a JavaScript function to create a specified number of elements with 
pre-filled numeric value array.
Test Data :
console.log(array_filled(6, 0));
[0, 0, 0, 0, 0, 0]
console.log(array_filled(4, 11));
[11, 11, 11, 11]*/

function array_filled(count, value) {
    let result = [];  // Initialize an empty array
    
    for (let i = 0; i < count; i++) {
        result.push(value);  // Push 'value' into the array 'count' times
    }
    
    return result;
}

// Test data
console.log(array_filled(6, 0));  // Output: [0, 0, 0, 0, 0, 0]
console.log(array_filled(4, 11)); // Output: [11, 11, 11, 11]
