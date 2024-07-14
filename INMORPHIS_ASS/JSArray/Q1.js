/*Write a JavaScript function to check whether an `input` is an array or not.
Test Data :
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));
false
true*/

// Function to check if input is an array
function is_array(input) {
    return Array.isArray(input);
}

// Test Data
console.log(is_array('w3resource')); // false
console.log(is_array([1, 2, 4, 0])); // true
