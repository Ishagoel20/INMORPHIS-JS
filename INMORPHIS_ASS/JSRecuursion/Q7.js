//Write a JavaScript program to check whether a number is even or not.

function isEven(number) {
    return number % 2 === 0;
}

// Example usage:
let num = 6;
if (isEven(num)) {
    console.log(`${num} is even.`);
} else {
    console.log(`${num} is not even.`);
}
