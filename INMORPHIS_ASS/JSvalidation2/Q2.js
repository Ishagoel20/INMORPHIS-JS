//Write a JavaScript function to validate whether a given value type is error or not.

function isError(value) {
    return value instanceof Error;
}

// Example usage:
console.log(isError(new Error('Sample error'))); // true
console.log(isError(new TypeError('Type mismatch'))); // true
console.log(isError('Error message')); // false
console.log(isError(404)); // false
console.log(isError(null)); // false
console.log(isError(undefined)); // false
