/*Write a JavaScript function to uncamelize a string.
Test Data :
console.log(uncamelize('helloWorld'));
console.log(uncamelize('helloWorld','-'));
console.log(uncamelize('helloWorld','_'));
"hello world"
"hello-world"
"hello_world"*/

function uncamelize(str, delimiter = ' ') {
    // Use a regular expression to insert the delimiter before all uppercase letters
    return str.replace(/[A-Z]/g, function(char) {
        return delimiter + char.toLowerCase();
    });
}

// Test Data
console.log(uncamelize('helloWorld'));      // Output: "hello world"
console.log(uncamelize('helloWorld', '-')); // Output: "hello-world"
console.log(uncamelize('helloWorld', '_')); // Output: "hello_world"

