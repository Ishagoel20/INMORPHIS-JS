//Write a JavaScript function to check whether a given value is Canada Post Code or not.

function isCanadaPostalCode(value) {
    // Regular expression for validating Canadian postal codes
    const postalCodeRegex = /^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$/;

    // Test the input against the regex and return true or false
    return postalCodeRegex.test(value.trim());
}

// Test cases
console.log(isCanadaPostalCode('A1A 1A1')); // true
console.log(isCanadaPostalCode('K1A 0B1')); // true
console.log(isCanadaPostalCode('V6Z 1B2')); // true
console.log(isCanadaPostalCode('X0A 1B2')); // true
console.log(isCanadaPostalCode('T2H 0S1')); // true
console.log(isCanadaPostalCode('A1A1A1')); // false (no space between outward and inward codes)
console.log(isCanadaPostalCode('A1A 1A1 ')); // false (trailing whitespace)
console.log(isCanadaPostalCode('1A1 1A1')); // false (starts with a digit)
console.log(isCanadaPostalCode('AAA 111')); // false (all letters)
console.log(isCanadaPostalCode('12345')); // false (all digits)
console.log(isCanadaPostalCode('A1A 1A')); // false (incomplete inward code)
console.log(isCanadaPostalCode('A1A 1A12')); // false (more than one digit in second inward code)

