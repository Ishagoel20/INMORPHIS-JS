//Write a JavaScript function to check a given value contains alpha, dash and underscore.

function containsAlphaDashUnderscore(value) {
    // Regular expression to check if the value contains alpha, dash, or underscore
    const regex = /[a-zA-Z_-]/;

    // Test the input against the regex and return true or false
    return regex.test(value);
}

// Test cases
console.log(containsAlphaDashUnderscore('hello-world')); // true
console.log(containsAlphaDashUnderscore('123_hello')); // true
console.log(containsAlphaDashUnderscore('alpha_Bravo')); // true
console.log(containsAlphaDashUnderscore('Dash-underscore')); // true
console.log(containsAlphaDashUnderscore('-_')); // true (contains only dash and underscore)
console.log(containsAlphaDashUnderscore('alpha123')); // true (contains alpha and digits)
console.log(containsAlphaDashUnderscore('onlyletters')); // true (contains only letters)
console.log(containsAlphaDashUnderscore('-')); // true (contains only dash)
console.log(containsAlphaDashUnderscore('_')); // true (contains only underscore)
console.log(containsAlphaDashUnderscore('123456')); // false (contains only digits)
console.log(containsAlphaDashUnderscore('')); // false (empty string)
console.log(containsAlphaDashUnderscore('@#$%^&*')); // false (contains special characters)
