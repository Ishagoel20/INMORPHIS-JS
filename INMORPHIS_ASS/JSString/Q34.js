/*Write a JavaScript function to convert a string to title case.
Test Data :
console.log(sentenceCase('PHP exercises. python exercises.'));
"Php Exercises. Python Exercises."*/

function sentenceCase(str) {
    // Split the string into words
    var words = str.toLowerCase().split(' ');

    // Capitalize the first letter of each word
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    // Join the words back into a sentence
    return words.join(' ');
}

// Test the function
console.log(sentenceCase('PHP exercises. python exercises.'));  // Output: "Php Exercises. Python Exercises."
