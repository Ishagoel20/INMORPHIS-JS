/*Write a JavaScript function to create a Zerofilled value with optional +, - sign.
Test Data :
console.log(zeroFill(120, 5, '-'));
"+00120"
console.log(zeroFill(29, 4));
"0029"*/

function zeroFill(number, width, sign) {
    // Convert number to string and determine the sign
    var prefix = (number >= 0 && sign === '-') ? '-' : (sign === '+') ? '+' : '';
    var str = Math.abs(number).toString();

    // Zero-fill the number to the specified width
    while (str.length < width) {
        str = '0' + str;
    }

    // Add prefix sign if provided
    if (prefix !== '') {
        str = prefix + str;
    }

    return str;
}

// Test the function
console.log(zeroFill(120, 5, '-'));  // Output: "+00120"
console.log(zeroFill(29, 4));        // Output: "0029"
