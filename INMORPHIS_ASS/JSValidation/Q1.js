//Write a JavaScript program to test the first character of a string is uppercase or not.

function isFirstCharUpperCase(str) {
    // Check if the first character is uppercase
    return str.charAt(0) === str.charAt(0).toUpperCase();
}

// Test the function
console.log(isFirstCharUpperCase('JavaScript'));  // Output: true
console.log(isFirstCharUpperCase('python'));      // Output: false
console.log(isFirstCharUpperCase(''));            // Output: false
console.log(isFirstCharUpperCase('1number'));     // Output: false

