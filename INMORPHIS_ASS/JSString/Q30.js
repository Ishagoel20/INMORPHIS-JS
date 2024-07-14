/*Write a JavaScript function check if a string ends with specified suffix.
Test Data :
console.log(string_endsWith('JS PHP PYTHON','PYTHON'));
true
console.log(string_endsWith('JS PHP PYTHON',''));
false*/

function string_endsWith(str, suffix) {
    return str.endsWith(suffix);
}

// Test the function
console.log(string_endsWith('JS PHP PYTHON', 'PYTHON'));  // Output: true
console.log(string_endsWith('JS PHP PYTHON', ''));        // Output: false

