//Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

function swapCase(str) {
    let swappedString = '';

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        
        if (char === char.toUpperCase()) {
            swappedString += char.toLowerCase();
        } else {
            swappedString += char.toUpperCase();
        }
    }

    return swappedString;
}

// Test case
let inputString = 'The Quick Brown Fox';
let outputString = swapCase(inputString);
console.log(outputString); // Output: "tHE qUICK bROWN fOX"
