//Write a JavaScript function to check whether a given value is an valid url or not.

function isValidUrl(url) {
    // Regular expression for validating an URL
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;

    // Test the input against the regex and return true or false
    return urlRegex.test(url);
}

// Test cases
console.log(isValidUrl('https://www.example.com')); // true
console.log(isValidUrl('http://example.com')); // true
console.log(isValidUrl('ftp://ftp.example.com/file.txt')); // true
console.log(isValidUrl('invalid-url')); // false
console.log(isValidUrl('https://')); // false
console.log(isValidUrl('https://www.')); // false
