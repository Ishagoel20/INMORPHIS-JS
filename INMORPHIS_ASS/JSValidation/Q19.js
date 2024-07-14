//Write a JavaScript function to check whether a given value is html or not.

function isHTML(value) {
    // Regular expression to check if the value contains HTML tags
    const htmlRegex = /<[a-z][\s\S]*>/i;

    // Test the input against the regex and return true or false
    return htmlRegex.test(value);
}

// Test cases
console.log(isHTML('<p>Hello, world!</p>')); // true
console.log(isHTML('<div><p>This is a paragraph.</p></div>')); // true
console.log(isHTML('Plain text without HTML tags.')); // false
console.log(isHTML('<a href="https://example.com">Link</a>')); // true
console.log(isHTML('<img src="image.jpg" alt="Image">')); // true
console.log(isHTML('<h1>Title</h1>')); // true
console.log(isHTML('<script>alert("Hello");</script>')); // true (includes script tag)
console.log(isHTML('')); // false (empty string)
console.log(isHTML('12345')); // false (plain text without HTML tags)
