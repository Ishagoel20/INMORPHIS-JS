/*Write a JavaScript function to count the number of vowels in a given string.
Test Data :
console.log(alphabetize_string('United States'));
Output :
"SUadeeinsttt"*/

function countVowels(str) {
    // Initialize vowel count
    let vowelCount = 0;
    
    // Convert the string to lowercase to handle both cases
    str = str.toLowerCase();
    
    // Loop through the string
    for (let i = 0; i < str.length; i++) {
        // Check if the current character is a vowel
        if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
            vowelCount++;
        }
    }
    
    // Return the total number of vowels
    return vowelCount;
}

// Test the function
console.log(countVowels('United States')); // Output: 5
