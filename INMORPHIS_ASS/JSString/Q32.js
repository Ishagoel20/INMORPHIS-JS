/*Write a JavaScript function to remove non-printable ASCII chars.
Test Data :
console.log(remove_non_ascii('äÄçÇéÉêPHP-MySQLöÖÐþúÚ'));
"PHP-MySQL"*/

function remove_non_ascii(str) {
    // Use regex to remove non-printable ASCII (ASCII values 0-31 and 127)
    return str.replace(/[\x00-\x1F\x7F]/g, '');
}

// Test the function
console.log(remove_non_ascii('äÄçÇéÉêPHP-MySQLöÖÐþúÚ'));  // Output: "PHP-MySQL"
