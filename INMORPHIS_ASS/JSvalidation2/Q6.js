//Write a JavaScript function to validate whether a given value is object or not.

function isObject(value) {
    return typeof value === 'object' && value !== null;
}

// Example usage:
console.log(isObject({}));          // true
console.log(isObject([]));          // true (arrays are objects in JavaScript)
console.log(isObject(null));        // false (null is technically an object, but we exclude it here)
console.log(isObject(new Date()));  // true (dates are objects)
console.log(isObject(123));         // false (numbers are not objects)
console.log(isObject('abc'));       // false (strings are not objects)
console.log(isObject(true));        // false (booleans are not objects)
console.log(isObject(undefined));   // false (undefined is not an object)
