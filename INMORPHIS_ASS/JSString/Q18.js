/*Write a JavaScript function to count the occurrence of a substring in a string.
Test Data :
console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
Output :
2
console.log(count("The quick brown fox jumps over the lazy dog", 'fox',false));
Output :
1*/

function count(str, sub, caseSensitive = true) {
    // If caseSensitive is false, convert both the string and substring to lowercase
    if (!caseSensitive) {
        str = str.toLowerCase();
        sub = sub.toLowerCase();
    }

    // Use a regular expression to find all occurrences of the substring
    // g flag is used to perform a global search
    var count = str.match(new RegExp(sub, 'g'));

    // Return the count of occurrences
    return count ? count.length : 0;
}

// Test Data
console.log(count("The quick brown fox jumps over the lazy dog", 'the')); // Output: 2
console.log(count("The quick brown fox jumps over the lazy dog", 'fox', false)); // Output: 1
