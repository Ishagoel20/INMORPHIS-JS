/*Write a JavaScript program to count number of words in string.
Note :
- Remove white-space from start and end position.
- Convert 2 or more spaces to 1.
- Exclude newline with a start spacing.*/

function countWords(str) {
    // Remove leading and trailing whitespace
    str = str.trim();

    // Replace 2 or more spaces with a single space
    str = str.replace(/\s{2,}/g, ' ');

    // Split the string by spaces to count words
    var words = str.split(' ');

    // Filter out empty strings (caused by extra spaces)
    words = words.filter(function(word) {
        return word !== '';
    });

    // Return the number of words
    return words.length;
}

// Test the function
console.log(countWords('  Hello,    World!  '));  // Output: 2
console.log(countWords('  This is a    test  '));  // Output: 4
console.log(countWords('  One   more  test '));  // Output: 3
console.log(countWords(''));  // Output: 0
console.log(countWords('   '));  // Output: 0
