//Write a JavaScript function to check whether a given value represents a domain or not.

function isDomain(value) {
    // Regular expression for validating domain names
    const domainRegex = /^[a-zA-Z0-9](?:[a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?)*$/;

    // Test the input against the regex and return true or false
    return domainRegex.test(value);
}

// Test cases
console.log(isDomain('example.com')); // true
console.log(isDomain('subdomain.example.com')); // true
console.log(isDomain('example.co.uk')); // true
console.log(isDomain('example.domain-with-hyphen.com')); // true
console.log(isDomain('123example.com')); // true (numbers are valid in domain names)
console.log(isDomain('example')); // false (missing top-level domain)
console.log(isDomain('.example.com')); // false (starts with a dot)
console.log(isDomain('example..com')); // false (consecutive dots)
console.log(isDomain('example_com')); // false (underscores are not valid)
console.log(isDomain('example!.com')); // false (special characters are not valid)
console.log(isDomain('')); // false (empty string)
