/*Write a JavaScript function to parameterize a string.
Test Data :
console.log(string_parameterize("Robin Singh from USA."));
"robin-singh-from-usa"*/

function string_parameterize(str) {
    // Convert to lowercase and replace non-alphanumeric characters (except dashes and underscores) with dashes
    return str.toLowerCase().replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-');
}

// Test Data
console.log(string_parameterize("Robin Singh from USA.")); // Output: "robin-singh-from-usa"

