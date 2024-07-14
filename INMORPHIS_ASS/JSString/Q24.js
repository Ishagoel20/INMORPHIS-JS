/*Write a JavaScript function to truncate a string to a certain number of words.
Test Data :
console.log(truncate('The quick brown fox jumps over the lazy dog', 4));
Output :
"The quick brown fox"*/

function truncate(str, numWords) {
    // Convert input string to an array of words
    var words = str.split(' ');

    // Slice the array to get the desired number of words and join them back into a string
    var truncatedString = words.slice(0, numWords).join(' ');

    return truncatedString;
}

// Test Data
console.log(truncate('The quick brown fox jumps over the lazy dog', 4)); // Output: "The quick brown fox"

