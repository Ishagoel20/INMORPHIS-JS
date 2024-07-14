//Write a JavaScript function to check whether a given value is hexadecimal value or not.

function isHexadecimal(value) {
    // Regular expression for validating hexadecimal values
    const hexRegex = /^[0-9A-Fa-f]+$/;

    // Test the input against the regex and return true or false
    return hexRegex.test(value);
}

// Test cases
console.log(isHexadecimal('1A')); // true
console.log(isHexadecimal('0xFF')); // true
console.log(isHexadecimal('abcdef')); // true
console.log(isHexadecimal('1234567890')); // true
console.log(isHexadecimal('0xG')); // false (contains invalid hexadecimal character)
console.log(isHexadecimal('hello')); // false (contains non-hexadecimal characters)
console.log(isHexadecimal('')); // false (empty string)
