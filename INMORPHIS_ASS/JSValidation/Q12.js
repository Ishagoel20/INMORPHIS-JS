//Write a JavaScript function to check whether a given value is US zip code or not.

function isUSZipCode(value) {
    // Regular expression for validating US ZIP codes (5 digits or 5 digits followed by a hyphen and 4 digits)
    const zipCodeRegex = /^\d{5}(-\d{4})?$/;

    // Test the input against the regex and return true or false
    return zipCodeRegex.test(value);
}

// Test cases
console.log(isUSZipCode('12345')); // true (5-digit format)
console.log(isUSZipCode('12345-6789')); // true (5+4-digit format)
console.log(isUSZipCode('9876')); // false (less than 5 digits)
console.log(isUSZipCode('123456')); // false (more than 5 digits)
console.log(isUSZipCode('1234A')); // false (contains non-digit characters)
console.log(isUSZipCode('12345-')); // false (missing last 4 digits after hyphen)
console.log(isUSZipCode('12345-678')); // false (only 3 digits after hyphen)
console.log(isUSZipCode('12345-67890')); // false (more than 4 digits after hyphen)
