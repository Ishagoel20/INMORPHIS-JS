/*Write a JavaScript program to find the armstrong numbers of 3 digits.
Note : An Armstrong number of three digits is an integer such that the sum of the 
cubes of its digits is equal to the number itself. For example, 371 is an Armstrong 
number since 3**3 + 7**3 + 1**3 = 371.*/

// Function to check if a number is an Armstrong number of 3 digits
function isArmstrong(num) {
    // Convert number to string to access individual digits
    let numStr = num.toString();
    let sum = 0;

    // Calculate sum of cubes of digits
    for (let digit of numStr) {
        let digitNum = parseInt(digit); // Convert digit from string to number
        sum += Math.pow(digitNum, 3);   // Cube each digit and add to sum
    }

    // Check if sum equals the original number
    return sum === num;
}

// Function to find and print Armstrong numbers of 3 digits
function findArmstrongNumbers() {
    let armstrongNumbers = [];

    // Iterate through all three-digit numbers (100 to 999)
    for (let num = 100; num <= 999; num++) {
        if (isArmstrong(num)) {
            armstrongNumbers.push(num);
        }
    }

    return armstrongNumbers;
}

// Find and print Armstrong numbers of 3 digits
let armstrongNumbers = findArmstrongNumbers();
console.log("Armstrong numbers of 3 digits:", armstrongNumbers.join(', '));

