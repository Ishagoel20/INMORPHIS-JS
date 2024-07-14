//Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.Sample arguments : 'w3resource.com', 'o'Expected output : 2

function countOccurrences(str, letter) {
    let count = 0;

    
    for (let i = 0; i < str.length; i++) {
     
        if (str.charAt(i) === letter) {
            count++;
        }
    }

    return count;
}


let string = 'w3resource.com';
let letterToCount = 'o';

let result = countOccurrences(string, letterToCount);
console.log(`Number of occurrences of '${letterToCount}' in '${string}': ${result}`);

