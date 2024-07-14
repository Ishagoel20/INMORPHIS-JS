/*Write a JavaScript conditional statement to find the sign of product of three 
numbers. Display an alert box with the specified sign.
Sample numbers : 3, -7, 2
Output : The sign is -*/

// Sample numbers
let num1 = 3;
let num2 = -7;
let num3 = 2;

// Calculate the product of the three numbers
let product = num1 * num2 * num3;

// Check the sign of the product
if (product > 0) {
    alert("The sign is +");
} else if (product < 0) {
    alert("The sign is -");
} else {
    alert("The product is zero");
}
