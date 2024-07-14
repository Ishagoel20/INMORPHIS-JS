/*Write a JavaScript function that takes a string which has lower and upper 
case letters as a parameter and converts upper case letters to lower case, and 
lower case letters to upper case.
Test Data :
console.log(swapcase('AaBbc'));
"aAbBC"*/

function swapcase(str) {
    var swapped = '';
    for (var i = 0; i < str.length; i++) {
        var char = str.charAt(i);
        if (char === char.toUpperCase()) {
            swapped += char.toLowerCase();
        } else {
            swapped += char.toUpperCase();
        }
    }
    return swapped;
}

// Test Data
console.log(swapcase('AaBbc')); // Output: "aAbBC"
