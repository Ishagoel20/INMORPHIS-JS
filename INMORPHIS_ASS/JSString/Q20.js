/*Write a JavaScript function that can pad (left, right) a string to get to a 
determined length.
Test Data :
console.log(formatted_string('0000',123,'l'));
console.log(formatted_string('00000000',123,''));
Output :
"0123"
"12300000"*/

function formatted_string(pad, str, side) {
    // Convert str to string if it's not already
    str = str.toString();
    
    if (side === 'l') {
        return (pad + str).slice(-pad.length);
    } else {
        return (str + pad).substring(0, pad.length);
    }
}

// Test Data
console.log(formatted_string('0000', 123, 'l')); // Output: "0123"
console.log(formatted_string('00000000', 123, '')); // Output: "12300000"
