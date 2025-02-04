/*According to Wikipedia a happy number is defined by the following process :
"Starting with any positive integer, replace the number by the sum of the squares 
of its digits, and repeat the process until the number equals 1 (where it will stay), 
or it loops endlessly in a cycle which does not include 1. Those numbers for 
which this process ends in 1 are happy numbers, while those that do not end in 1 
are unhappy numbers (or sad numbers)".
Write a JavaScript program to find and print the first 5 happy numbers.*/

// Function to determine if a number is happy
function isHappyNumber(num) {
    let seen = new Set();

    while (num !== 1 && !seen.has(num)) {
        seen.add(num);
        num = sumOfSquaredDigits(num);
    }

    return num === 1;
}

// Function to compute the sum of squared digits
function sumOfSquaredDigits(num) {
    let sum = 0;
    while (num > 0) {
        let digit = num % 10;
        sum += digit * digit;
        num = Math.floor(num / 10);
    }
    return sum;
}

// Function to find and print the first n happy numbers
function findFirstNHappyNumbers(n) {
    let count = 0;
    let number = 1;
    let happyNumbers = [];

    while (count < n) {
        if (isHappyNumber(number)) {
            happyNumbers.push(number);
            count++;
        }
        number++;
    }

    return happyNumbers;
}

// Find and print the first 5 happy numbers
let first5HappyNumbers = findFirstNHappyNumbers(5);
console.log("The first 5 happy numbers are:", first5HappyNumbers.join(', '));
