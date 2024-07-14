//Write a JavaScript function to find the first not repeated character.Sample arguments : 'abacddbec' Expected output : 'e'

function firstNonRepeatedCharacter(str) {
    
    let charCount = {};

    
    for (let char of str) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    return null;
}


let inputString = 'abacddbec';
let result = firstNonRepeatedCharacter(inputString);
console.log(`First non-repeated character in '${inputString}' is: ${result}`);

