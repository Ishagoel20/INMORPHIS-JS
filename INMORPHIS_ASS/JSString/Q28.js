/*Write a JavaScript function to convert Hexadecimal to ASCII format.
Test Data :
console.log(hex_to_ascii('3132'));
console.log(hex_to_ascii('313030'));
Output :
"12"
"100"*/

function hex_to_ascii(hexStr) {
    var str = '';
    for (var i = 0; i < hexStr.length; i += 2) {
        var hexPair = hexStr.substr(i, 2);
        var num = parseInt(hexPair, 16);
        str += String.fromCharCode(num);
    }
    return str;
}

// Test the function
console.log(hex_to_ascii('3132'));    // Output: "12"
console.log(hex_to_ascii('313030'));  // Output: "100"
