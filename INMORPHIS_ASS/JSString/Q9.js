/*Write a JavaScript function to capitalize the first letter of each word in a string.
Test Data :
console.log(capitalize_Words('js string exercises'));
"Js String Exercises"*/

function capitalize_Words(str) {
    // Split the string into an array of words
    var words = str.split(' ');

    // Iterate through the array and capitalize the first letter of each word
    for (var i = 0; i < words.length; i++) {
        // Capitalize the first letter of the current word and concatenate with the rest of the word
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    // Join the words back into a single string and return
    return words.join(' ');
}

// Test Data
console.log(capitalize_Words('js string exercises')); // Output: "Js String Exercises"
