/*Write a JavaScript program which iterates the integers from 1 to 100. But for 
multiples of three print "Fizz" instead of the number and for the multiples of five 
print "Buzz". For numbers which are multiples of both three and five print 
"FizzBuzz"*/

// Loop from 1 to 100
for (let i = 1; i <= 100; i++) {
    // Check if the number is divisible by both 3 and 5 first
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) { // Check if the number is divisible by 3
        console.log("Fizz");
    } else if (i % 5 === 0) { // Check if the number is divisible by 5
        console.log("Buzz");
    } else {
        console.log(i); // Print the number if none of the above conditions are met
    }
}
