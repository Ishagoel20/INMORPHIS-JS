//Write a JavaScript function to validate whether a given value type is char or not.

function isChar(value) {
    return typeof value === 'string' && value.length === 1;
}

// Example usage:
console.log(isChar('a'));     // true
console.log(isChar(''));      // false (empty string)
console.log(isChar('ab'));    // false (more than one character)
console.log(isChar('1'));     // true (numeric character)
console.log(isChar(' '));     // true (space character)
console.log(isChar('Hello')); // false (not a single character)
console.log(isChar(1));       // false (not a string)
console.log(isChar(true));    // false (not a string)
console.log(isChar({}));      // false (not a string)
