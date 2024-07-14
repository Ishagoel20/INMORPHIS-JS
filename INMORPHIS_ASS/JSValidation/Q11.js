//Write a JavaScript function to check whether a given value is time string or not.

function isTimeString(value) {
    // Regular expression for validating time strings in HH:MM or HH:MM:SS format
    const timeRegex = /^([01]?[0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9])?$/;

    // Test the input against the regex and return true or false
    return timeRegex.test(value);
}

// Test cases
console.log(isTimeString('12:34')); // true (valid HH:MM format)
console.log(isTimeString('23:59')); // true (valid HH:MM format)
console.log(isTimeString('00:00')); // true (valid HH:MM format)
console.log(isTimeString('12:34:56')); // true (valid HH:MM:SS format)
console.log(isTimeString('23:59:59')); // true (valid HH:MM:SS format)
console.log(isTimeString('24:00:00')); // false (invalid hour format)
console.log(isTimeString('12:60')); // false (invalid minute format)
console.log(isTimeString('12:34:60')); // false (invalid second format)
console.log(isTimeString('abc')); // false (not a valid time format)
console.log(isTimeString('12-34')); // false (invalid delimiter)
console.log(isTimeString('12.34')); // false (invalid delimiter)
