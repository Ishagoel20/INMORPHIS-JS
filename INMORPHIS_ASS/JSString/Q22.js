/*Write a JavaScript function to get a part of a string after a specified character.
Test Data :
console.log(subStrAfterChars('w3resource: JavaScript Exercises', ':','a'));
console.log(subStrAfterChars('w3resource: JavaScript Exercises', 'E','b'));
Output :
"w3resource"
"xercises"*/

function subStrAfterChars(str, char, mode = 'a') {
    var index = -1;
    
    // Find the index of the character 'char' in the string 'str'
    if (mode === 'a') {
        index = str.indexOf(char);
    } else {
        index = str.lastIndexOf(char);
    }
    
    // If the character 'char' is found in the string 'str'
    if (index !== -1) {
        // Return the substring after the character 'char'
        return str.substring(index + 1);
    } else {
        // If the character 'char' is not found in the string 'str', return empty string
        return '';
    }
}

// Test Data
console.log(subStrAfterChars('w3resource: JavaScript Exercises', ':', 'a')); // Output: " JavaScript Exercises"
console.log(subStrAfterChars('w3resource: JavaScript Exercises', 'E', 'b')); // Output: "xercises"
