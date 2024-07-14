//Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here. Example string : 'The quick brown fox' Expected Output : 5


function countVowels(str) {
    
    str = str.toLowerCase();
    
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            count++;
        }
    }
    
    return count;
}


let inputString = 'The quick brown fox';
let vowelCount = countVowels(inputString);
console.log("Number of vowels in '" + inputString + "':", vowelCount);
