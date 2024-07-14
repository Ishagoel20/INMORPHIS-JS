//Write a JavaScript function to check whether a given value is IP value or not.

function isIPAddress(value) {
    // Regular expression patterns for IPv4 and IPv6
    var ipPattern = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$|^(?:[a-fA-F0-9]{1,4}:){7}[a-fA-F0-9]{1,4}$/;

    // Check if the value matches the IP pattern
    return ipPattern.test(value);
}

// Test the function
console.log(isIPAddress('192.168.0.1'));   // Output: true
console.log(isIPAddress('2001:0db8:85a3:0000:0000:8a2e:0370:7334'));  // Output: true
console.log(isIPAddress('256.0.0.1'));    // Output: false (invalid IPv4)
console.log(isIPAddress('2001:0db8:85a3::8a2e:0370:7334'));  // Output: false (invalid IPv6)
console.log(isIPAddress('localhost'));    // Output: false
