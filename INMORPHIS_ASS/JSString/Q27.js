/*Write a JavaScript function to convert ASCII to Hexadecimal format.
Test Data :
console.log(ascii_to_hexa('12'));
console.log(ascii_to_hexa('100'));
Output :
"3132"
"313030"*/

function ascii_to_hexa(str) {
    var hex = '';
    for(var i = 0; i < str.length; i++) {
        var hexPart = str.charCodeAt(i).toString(16);
        hex += hexPart;
    }
    return hex;
}

// Test the function
console.log(ascii_to_hexa('12'));   // Output: "3132"
console.log(ascii_to_hexa('100'));  // Output: "313030"

