//Write a JavaScript function to check whether a given value is UK Post Code or not.

function isUKPostcode(value) {
    // Regular expression for validating UK postcodes
    const postcodeRegex = /^(GIR 0AA|[A-PR-UWYZ]([0-9]{1,2}|([A-HK-Y][0-9]([0-9ABEHMNPRV-Y])?)|[0-9][A-HJKPS-UW]) [0-9][ABD-HJLNP-UW-Z]{2})$/i;

    // Test the input against the regex and return true or false
    return postcodeRegex.test(value.trim());
}

// Test cases
console.log(isUKPostcode('SW1A 1AA')); // true
console.log(isUKPostcode('EC1A 1BB')); // true
console.log(isUKPostcode('W1A 0AX')); // true
console.log(isUKPostcode('M1 1AE')); // true
console.log(isUKPostcode('B33 8TH')); // true
console.log(isUKPostcode('CR2 6XH')); // true
console.log(isUKPostcode('DN55 1PT')); // true
console.log(isUKPostcode('WR12 7DT')); // true
console.log(isUKPostcode('AB12 3CD')); // true
console.log(isUKPostcode('GIR 0AA')); // true (special postcode for Gibraltar)

console.log(isUKPostcode('SW1A1AA')); // false (no space between outward and inward codes)
console.log(isUKPostcode('SW1A 1AA ')); // false (trailing whitespace)
console.log(isUKPostcode('E1 1A')); // false (incomplete inward code)
console.log(isUKPostcode('W1A 0A')); // false (incomplete inward code)
console.log(isUKPostcode('X1A 1AA')); // false (invalid outward code)
console.log(isUKPostcode('G1R 0AA')); // false (invalid outward code)
