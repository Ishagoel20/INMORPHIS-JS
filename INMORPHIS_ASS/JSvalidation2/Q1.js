//Write a JavaScript function to validate whether a given value type is boolean or not.

function isBoolean(value) {
    return typeof value === 'boolean';
}

// Example usage:
console.log(isBoolean(true));    // true
console.log(isBoolean(false));   // true
console.log(isBoolean('true'));  // false
console.log(isBoolean(0));       // false
console.log(isBoolean(null));    // false
console.log(isBoolean(undefined)); // false
