/*Write a JavaScript function to convert a string in abbreviated form.
Test Data :
console.log(abbrev_name("Robin Singh"));
"Robin S."*/

function abbrev_name(name) {
    // Split the name into parts based on whitespace
    var parts = name.trim().split(' ');

    // Check if there are at least two parts (first name and last name)
    if (parts.length >= 2) {
        // Get the first name and the first character of the last name followed by '.'
        return parts[0] + ' ' + parts[parts.length - 1].charAt(0) + '.';
    } else {
        // If only one part is present, return it as is
        return name;
    }
}

// Test Data
console.log(abbrev_name("Robin Singh")); // Output: "Robin S."
