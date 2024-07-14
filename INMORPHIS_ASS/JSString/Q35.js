/*Write a JavaScript function to remove HTML/XML tags from string.
Test Data :
console.log(strip_html_tags('<p><strong><em>PHP 
Exercises</em></strong></p>'));
"PHP Exercises"*/

function strip_html_tags(str) {
    // Remove HTML tags using a regex
    return str.replace(/<[^>]*>/g, '');
}

// Test the function
console.log(strip_html_tags('<p><strong><em>PHP Exercises</em></strong></p>'));  // Output: "PHP Exercises"
