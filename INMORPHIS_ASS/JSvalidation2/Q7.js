//Write a JavaScript function to validate whether a given value type is pure json object or not.

function isJSONObject(value) {
    // Check if value is an object and not null
    if (typeof value !== 'object' || value === null || Array.isArray(value)) {
        return false;
    }
    // Further check if it's a JSON object (no custom prototype)
    return Object.prototype.toString.call(value) === '[object Object]';
}

// Example usage:
console.log(isJSONObject({}));          // true
console.log(isJSONObject([]));          // false (arrays are not JSON objects)
console.log(isJSONObject(null));        // false (null is not an object)
console.log(isJSONObject(new Date()));  // false (dates are not JSON objects)
console.log(isJSONObject(123));         // false (numbers are not JSON objects)
console.log(isJSONObject('abc'));       // false (strings are not JSON objects)
console.log(isJSONObject(true));        // false (booleans are not JSON objects)
console.log(isJSONObject(undefined));   // false (undefined is not an object)
