/*Write a JavaScript function to truncates a string if it is longer than the 
specified number of characters. Truncated strings will end with a translatable 
ellipsis sequence ("…") (by default) or specified characters.
Test Data :
console.log(text_truncate('We are doing JS string exercises.'))
console.log(text_truncate('We are doing JS string exercises.',19))
console.log(text_truncate('We are doing JS string exercises.',15,'!!'))
"We are doing JS string exercises."
"We are doing JS ..."
"We are doing !!"*/

function text_truncate(str, length, ending = '…') {
    if (typeof length === 'undefined') {
        length = 100;
    }
    if (typeof ending === 'undefined') {
        ending = '…';
    }
    if (str.length > length) {
        return str.substring(0, length - ending.length) + ending;
    } else {
        return str;
    }
}

// Test Data
console.log(text_truncate('We are doing JS string exercises.')); // Output: "We are doing JS string exercises."
console.log(text_truncate('We are doing JS string exercises.', 19)); // Output: "We are doing JS ..."
console.log(text_truncate('We are doing JS string exercises.', 15, '!!')); // Output: "We are doing !!"
