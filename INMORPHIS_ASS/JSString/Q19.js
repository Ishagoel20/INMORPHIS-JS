/*Write a JavaScript function to escape a HTML string.
Test Data :
console.log(escape_HTML('<a href="javascript-string-exercise-17.php" 
target="_blank">'));
Output :
"&lt;a href=&quot;javascript-string-exercise-17.php&quot; 
target=&quot;_blank&quot;&gt;"*/

function escape_HTML(htmlString) {
    var escapeMap = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    };

    // Use replace function with a regular expression to replace characters
    // that have special meaning in HTML with their respective HTML entities
    return htmlString.replace(/[&<>"']/g, function(match) {
        return escapeMap[match];
    });
}

// Test Data
console.log(escape_HTML('<a href="javascript-string-exercise-17.php" target="_blank">'));
// Output: "&lt;a href=&quot;javascript-string-exercise-17.php&quot; target=&quot;_blank&quot;&gt;"

