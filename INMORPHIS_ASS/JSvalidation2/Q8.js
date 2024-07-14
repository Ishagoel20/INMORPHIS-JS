//Write a JavaScript function to validate whether a given value is RegExp or not.

function isRegExp(value) {
    return value instanceof RegExp;
}

// Example usage:
console.log(isRegExp(/test/));        // true
console.log(isRegExp(new RegExp()));  // true
console.log(isRegExp('/test/'));      // false (this is a string, not a RegExp)
console.log(isRegExp({}));            // false (this is an object, not a RegExp)
console.log(isRegExp(null));          // false (null is not a RegExp)
console.log(isRegExp(undefined));     // false (undefined is not a RegExp)
console.log(isRegExp(123));           // false (numbers are not RegExp objects)
