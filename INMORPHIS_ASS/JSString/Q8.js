/*Write a JavaScript function to capitalize the first letter of a string.
Test Data :
console.log(capitalize('js string exercises'));
"Js string exercises"*/

function capitalize(str) {
    // Check if the string is empty or null
    if (!str) return str;

    // Capitalize the first letter and concatenate with the rest of the string
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Test Data
console.log(capitalize('js string exercises')); // Output: "Js string exercises"
