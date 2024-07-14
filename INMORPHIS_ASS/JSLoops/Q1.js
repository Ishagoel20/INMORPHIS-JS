//Write a JavaScript program that accept two integers and display the larger

// Function to accept two integers and display the larger one
function displayLargerInteger() {
    // Prompting the user to enter the first integer
    let num1 = parseInt(prompt("Enter the first integer:"));

    // Prompting the user to enter the second integer
    let num2 = parseInt(prompt("Enter the second integer:"));

    // Checking which integer is larger
    if (num1 > num2) {
        console.log(`The larger integer is: ${num1}`);
    } else if (num2 > num1) {
        console.log(`The larger integer is: ${num2}`);
    } else {
        console.log("Both integers are equal.");
    }
}

// Calling the function to execute
displayLargerInteger();
