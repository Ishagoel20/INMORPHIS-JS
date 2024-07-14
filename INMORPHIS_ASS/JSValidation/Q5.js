//Write a JavaScript program that work as a trim function (string) using regular expression.

function trim(str) {
    // Use a regular expression to remove leading and trailing whitespace
    return str.replace(/^\s+|\s+$/g, '');
}

// Test the function
console.log(trim('  Hello, World!  '));  // Output: "Hello, World!"
console.log(trim('\t\tJavaScript\t'));  // Output: "JavaScript"
console.log(trim('   \n   Node.js   \t'));  // Output: "Node.js"
console.log(trim(''));  // Output: ""
console.log(trim('   '));  // Output: ""
