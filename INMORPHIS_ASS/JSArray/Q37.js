/*Write a JavaScript function to create a specified number of elements with 
pre-filled string value array.
Test Data :
console.log(array_filled(3, 'default value'));
["default value", "default value", "default value"]
console.log(array_filled(4, 'password'));
["password", "password", "password", "password"]*/

function array_filled(count, value) {
    let result = [];  // Initialize an empty array
    
    for (let i = 0; i < count; i++) {
        result.push(value);  // Push 'value' into the array 'count' times
    }
    
    return result;
}

// Test data
console.log(array_filled(3, 'default value')); // Output: ["default value", "default value", "default value"]
console.log(array_filled(4, 'password'));      // Output: ["password", "password", "password", "password"]

