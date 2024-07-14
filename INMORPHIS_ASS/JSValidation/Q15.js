//Write a JavaScript function to check whether a given value is a social security number or not.

function isSSN(value) {
    // Regular expression for validating Social Security Numbers (XXX-XX-XXXX)
    const ssnRegex = /^\d{3}-\d{2}-\d{4}$/;

    // Test the input against the regex and return true or false
    return ssnRegex.test(value.trim());
}

// Test cases
console.log(isSSN('123-45-6789')); // true
console.log(isSSN('987-65-4321')); // true
console.log(isSSN('123456789')); // false (missing dashes)
console.log(isSSN('123-456-789')); // false (extra digits)
console.log(isSSN('123-45-678')); // false (incomplete last group)
console.log(isSSN('12345-6789')); // false (incorrect format)
console.log(isSSN('123-4567-89')); // false (extra group)
console.log(isSSN('12345678A')); // false (contains non-digit character)
console.log(isSSN('')); // false (empty string)
