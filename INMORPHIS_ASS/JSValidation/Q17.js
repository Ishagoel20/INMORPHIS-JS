//Write a JavaScript function to check whether a given value is hexcolor value or not.

function isHexColor(value) {
    // Regular expression for validating hex color values (e.g., #FFF, #123abc)
    const hexColorRegex = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;

    // Test the input against the regex and return true or false
    return hexColorRegex.test(value);
}

// Test cases
console.log(isHexColor('#FFF')); // true
console.log(isHexColor('#123abc')); // true
console.log(isHexColor('#f00')); // true (short form)
console.log(isHexColor('#FFFFFF')); // true
console.log(isHexColor('#abcDEF')); // true
console.log(isHexColor('#12345')); // false (less than 3 or 6 digits)
console.log(isHexColor('FFF')); // false (missing # prefix)
console.log(isHexColor('123abc')); // false (missing # prefix)
console.log(isHexColor('#12G')); // false (contains invalid hexadecimal character)
console.log(isHexColor('#FF00FF00')); // false (more than 6 digits)
console.log(isHexColor('#')); // false (empty string)
