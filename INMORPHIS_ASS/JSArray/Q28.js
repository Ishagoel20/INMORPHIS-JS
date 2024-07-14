/*Write a JavaScript function to find the longest common starting substring in a 
set of strings.
Sample array : console.log(longest_common_starting_substring(['go', 'google']));
Expected result : "go"*/

function longest_common_starting_substring(arr) {
    if (arr.length === 0) return ""; // If array is empty, return an empty string

    let prefix = arr[0]; // Initialize prefix with the first string

    for (let i = 1; i < arr.length; i++) {
        while (arr[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1); // Reduce prefix length until it matches
        }
    }

    return prefix;
}

// Example usage:
console.log(longest_common_starting_substring(['go', 'google'])); // Output: "go"
console.log(longest_common_starting_substring(['flow', 'flower', 'flight'])); // Output: "fl"
console.log(longest_common_starting_substring(['dog', 'race', 'car'])); // Output: ""
