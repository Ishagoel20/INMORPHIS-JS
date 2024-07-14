//Write a JavaScript function that returns a passed string with letters in alphabetical order.

function alphabetize_string(str) {
    // Convert the string to an array of characters
    let chars = str.split('');

    // Sort the array of characters alphabetically
    let sortedChars = chars.sort();

    // Join the sorted array back into a string
    let sortedStr = sortedChars.join('');

    // Return the sorted string
    return sortedStr;
}

// Test the function
console.log(alphabetize_string('United States')); // Output: "SUadeeinsttt"
