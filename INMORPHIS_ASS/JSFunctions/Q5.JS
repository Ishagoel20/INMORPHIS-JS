//Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. Example string : 'the quick brown fox' Expected Output : 'The Quick Brown Fox '


function capitalizeWords(str) {
    
    let words = str.split(' ');

    
    for (let i = 0; i < words.length; i++) {
        
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

   
    return words.join(' ');
}


let inputString = 'the quick brown fox';
let capitalizedString = capitalizeWords(inputString);
console.log("Original string:", inputString);
console.log("Capitalized string:", capitalizedString);


