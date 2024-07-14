//Write a JavaScript function to get the number of occurrences of each letter in specified string.

function countOccurrences(str) {
    
    let counts = {};


    for (let char of str) {
       
        if (/[a-zA-Z]/.test(char)) {
            char = char.toLowerCase(); 
            counts[char] = (counts[char] || 0) + 1; /
        }
    }

    return counts;
}


let str = "Hello World!";
let occurrences = countOccurrences(str);


for (let char in occurrences) {
    console.log(`${char}: ${occurrences[char]}`);
}

