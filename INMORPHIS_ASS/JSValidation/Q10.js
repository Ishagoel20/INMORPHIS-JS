//Write a JavaScript function to check whether a given value is alpha numeric or not.

function isAlphaNumeric(value) {
    // Regular expression for alphanumeric characters
    const alphaNumericRegex = /^[0-9a-zA-Z]+$/;

    // Test the input against the regex and return true or false
    return alphaNumericRegex.test(value);
}

// Test cases
console.log(isAlphaNumeric('abc123')); // true
console.log(isAlphaNumeric('HelloWorld')); // true
console.log(isAlphaNumeric('12345')); // true
console.log(isAlphaNumeric('abc123!')); // false (contains non-alphanumeric character)
console.log(isAlphaNumeric('')); // false (empty string)
console.log(isAlphaNumeric('   ')); // false (contains only whitespace)
