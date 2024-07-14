//Write a JavaScript function to validate whether a given value is number or not.

function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
}

// Example usage:
console.log(isNumber(123));        // true
console.log(isNumber('123'));      // false
console.log(isNumber('abc'));      // false
console.log(isNumber(true));       // false
console.log(isNumber(null));       // false
console.log(isNumber(undefined));  // false
console.log(isNumber([]));         // false
console.log(isNumber({}));         // false
