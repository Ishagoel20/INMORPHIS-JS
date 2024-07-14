/*Write a JavaScript function to split a string and convert it into an array of
words.
Test Data :
console.log(string_to_array("Robin Singh"));
["Robin", "Singh"]*/

function string_to_array(str) {
    // Split the string by whitespace and return the resulting array
    return str.trim().split(/\s+/);
}

// Test Data
console.log(string_to_array("Robin Singh")); // Output: ["Robin", "Singh"]
