/*Write a JavaScript function to repeat a string a specified times.
Test Data :
console.log(repeat_string('a', 4));
console.log(repeat_string('a'));
Output :
"aaaa"
"Error in string or count."*/

function repeat_string(str, count) {
    // Check if either str or count is undefined or count is not a positive integer
    if (typeof str !== 'string' || typeof count !== 'number' || count <= 0 || !Number.isInteger(count)) {
        return "Error in string or count.";
    }

    // Initialize an empty array to store repeated strings
    var repeatedString = '';
    for (var i = 0; i < count; i++) {
        repeatedString += str;
    }

    return repeatedString;
}

// Test Data
console.log(repeat_string('a', 4)); // Output: "aaaa"
console.log(repeat_string('a'));    // Output: "Error in string or count."
