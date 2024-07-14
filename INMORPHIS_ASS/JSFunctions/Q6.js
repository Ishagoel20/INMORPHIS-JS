//Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. Example string : 'Web Development Tutorial' Expected Output : 'Development'.


function findLongestWord(str) {
    
    let words = str.split(' ');

    
    let longestWord = '';
    let maxLength = 0;

    
    for (let i = 0; i < words.length; i++) {
        
        let word = words[i].replace(/[^a-zA-Z0-9]/g, '');

        
        if (word.length > maxLength) {
            longestWord = word;
            maxLength = word.length;
        }
    }

    return longestWord;
}


let inputString = 'Web Development Tutorial';
let longestWord = findLongestWord(inputString);
console.log("Longest word in '" + inputString + "':", longestWord);









