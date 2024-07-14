//Write a JavaScript function that returns a passed string with letters in alphabetical order. Example string : 'webmaster' Expected Output : 'abeemrstw' Assume punctuation and numbers symbols are not included in the passed string.


function sortStringAlphabetically(str) {
    
    return str.split('').sort().join('');
}


let inputString = 'webmaster';
let sortedString = sortStringAlphabetically(inputString);
console.log("Original string:", inputString);
console.log("Sorted string:", sortedString);




