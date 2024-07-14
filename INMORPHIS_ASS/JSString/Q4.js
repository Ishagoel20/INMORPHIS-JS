/*Write a JavaScript function to remove specified number of characters from a 
string.
Test Data :
console.log(truncate_string("Robin Singh",4));
"Robi"*/

function truncate_string(str, num) {
    // Use slice to get the substring from the start to num characters
    return str.slice(0, num);
}

// Test Data
console.log(truncate_string("Robin Singh", 4)); // Output: "Robi"
