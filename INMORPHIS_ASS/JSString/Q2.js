/*Write a JavaScript function to check whether a string is blank or not.
Test Data :
console.log(is_Blank(''));
console.log(is_Blank('abc'));
true
false*/

function is_Blank(str) {
    return (!str || /^\s*$/.test(str));
}

// Test Data
console.log(is_Blank(''));   // true
console.log(is_Blank('abc'));   // false
