/*Write a JavaScript function to escapes special characters (&, <, >, ', ") for use 
in HTML.
Test Data :
console.log(escape_html('PHP & MySQL'));
"PHP &amp; MySQL"
console.log(escape_html('3 > 2'));
"3 &gt; 2"*/

function escape_html(str) {
    var escape_map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',    // &apos; is not widely supported, use &#39; instead
        '"': '&quot;'
    };

    // Replace special characters with their HTML entities
    return str.replace(/[&<>'"]/g, function(char) {
        return escape_map[char];
    });
}

// Test the function
console.log(escape_html('PHP & MySQL'));   // Output: "PHP &amp; MySQL"
console.log(escape_html('3 > 2'));         // Output: "3 &gt; 2"
