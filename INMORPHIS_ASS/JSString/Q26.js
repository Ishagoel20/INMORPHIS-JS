/*Write a JavaScript function to remove the first occurrence of a given 'search 
string' from a string.
Test Data :
console.log(remove_first_occurrence("The quick brown fox jumps over the lazy 
dog", 'the'));
Output :
"The quick brown fox jumps over lazy dog"*/

function remove_first_occurrence(str, substr) {
    // Find the first occurrence of substr in str
    var index = str.toLowerCase().indexOf(substr.toLowerCase());

    // If substring found
    if (index !== -1) {
        // Construct the new string without the first occurrence of substr
        return str.substring(0, index) + str.substring(index + substr.length);
    }

    // If substring not found, return the original string
    return str;
}

// Test the function
console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));

