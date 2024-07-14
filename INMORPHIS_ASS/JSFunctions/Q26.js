//Write a JavaScript function to find longest substring in a given a string without repeating characters.

function longestSubstringWithoutRepeatingChars(str) {
    let maxLength = 0; // Initialize the maximum length of substring
    let start = 0; // Initialize the starting index of the substring
    let charMap = {}; // Object to store characters and their indices

    for (let end = 0; end < str.length; end++) {
        let currentChar = str[end];

        // If currentChar is already in the map and its index is >= start,
        // move the start to the index after the last occurrence of currentChar
        if (charMap[currentChar] !== undefined && charMap[currentChar] >= start) {
            start = charMap[currentChar] + 1;
        }

        // Update the map with the currentChar and its index
        charMap[currentChar] = end;

        // Update the maxLength if the current substring length is greater
        maxLength = Math.max(maxLength, end - start + 1);
    }

    // Extract the longest substring using start index and maxLength
    let longestSubstring = str.substring(start, start + maxLength);

    return longestSubstring;
}

// Example usage:
let inputString = "abcabcbb";
let longestSubstring = longestSubstringWithoutRepeatingChars(inputString);
console.log(longestSubstring); // Output: "abc"

let inputString2 = "bbbbb";
let longestSubstring2 = longestSubstringWithoutRepeatingChars(inputString2);
console.log(longestSubstring2); // Output: "b"

let inputString3 = "pwwkew";
let longestSubstring3 = longestSubstringWithoutRepeatingChars(inputString3);
console.log(longestSubstring3); // Output: "wke"

