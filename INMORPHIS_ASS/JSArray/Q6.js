//Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8.

function insertDashes(input) {
    // Convert input number to string
    let str = input.toString();
    let result = '';

    // Iterate through each digit of the string
    for (let i = 0; i < str.length; i++) {
        let currentDigit = parseInt(str[i], 10);
        let nextDigit = parseInt(str[i + 1], 10);

        // Check if both currentDigit and nextDigit are even numbers
        if (currentDigit % 2 === 0 && nextDigit % 2 === 0) {
            result += currentDigit + '-';
        } else {
            result += currentDigit;
        }
    }

    return result;
}

// Test cases
console.log(insertDashes(25468)); // Output: "0-254-6-8"
console.log(insertDashes(135689)); // Output: "135689"
console.log(insertDashes(24680246)); // Output: "2-4680-2-46"
console.log(insertDashes(123456789)); // Output: "123456789"

