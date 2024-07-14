/*Write a JavaScript function to alphabetize a given string.
Alphabetize string : An individual string can be alphabetized. This rearranges the 
letters so they are sorted A to Z.
Test Data :
console.log(alphabetize_string('United States'));
Output :
"SUadeeinsttt"*/

function alphabetize_string(str) {
    // Convert the string to an array of characters
    var chars = str.split('');
    
    // Sort the array of characters alphabetically
    var sortedChars = chars.sort();
    
    // Join the sorted array back into a string
    var sortedStr = sortedChars.join('');
    
    return sortedStr;
}

// Test Data
console.log(alphabetize_string('United States')); // Output: " SUadeeinsttt"

