//Write a JavaScript function to validate whether a given value type is NaN or not.

function isValueNaN(value) {
    return isNaN(value);
}

// Example usage:
console.log(isValueNaN(NaN));      // true
console.log(isValueNaN(123));      // false
console.log(isValueNaN('abc'));    // true (when converted to NaN)
console.log(isValueNaN(undefined)); // true
console.log(isValueNaN(null));     // false
console.log(isValueNaN([]));       // false
