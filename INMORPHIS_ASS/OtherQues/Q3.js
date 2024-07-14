//Write a JavaScript function to extract unique characters from a string “thequickbrownfoxjumpsoverthelazydog”.

function extractUniqueCharacters(str) {
    // Use an object to track unique characters
    let uniqueChars = {};

    // Iterate through each character of the string
    for (let i = 0; i < str.length; i++) {
        // Add each character to the object (keys are automatically unique)
        uniqueChars[str[i]] = true;
    }

    // Object keys are unique, so convert them back to a string
    let result = Object.keys(uniqueChars).join('');

    return result;
}

// Test the function with the given string
let inputString = "thequickbrownfoxjumpsoverthelazydog";
let uniqueChars = extractUniqueCharacters(inputString);
console.log(uniqueChars);  // Output: "thequickbrownfxjmpsvlazydg"
