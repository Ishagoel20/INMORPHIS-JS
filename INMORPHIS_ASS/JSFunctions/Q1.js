//Write a JavaScript function that reverse a number. Example x = 32243; Expected Output : 34223


function reverseNumber(num) {
    // Convert number to string
    var numStr = num.toString();

    // Reverse the string
    var reversedStr = numStr.split('').reverse().join('');

    // Convert the reversed string back to number
    var reversedNum = parseInt(reversedStr);

    return reversedNum;
}

// Example usage:
var x = 32243;
var reversedX = reverseNumber(x);
console.log("Original number:", x);
console.log("Reversed number:", reversedX);











