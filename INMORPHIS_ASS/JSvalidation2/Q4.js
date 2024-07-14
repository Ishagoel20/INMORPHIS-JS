//Write a JavaScript function to validate whether a given value type is null or not.

function isValueNull(value) {
    return value === null;
}

// Example usage:
console.log(isValueNull(null));       // true
console.log(isValueNull(undefined));  // false
console.log(isValueNull(''));         // false
console.log(isValueNull(0));          // false
console.log(isValueNull(false));      // false
console.log(isValueNull({}));         // false
