//Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result.

// Sample numbers
let num1 = 10;
let num2 = 5;
let num3 = 20;
let num4 = 15;
let num5 = 8;

// Variable to store the largest number
let largest;

// Finding the largest number using conditional statements
if (num1 >= num2 && num1 >= num3 && num1 >= num4 && num1 >= num5) {
    largest = num1;
} else if (num2 >= num1 && num2 >= num3 && num2 >= num4 && num2 >= num5) {
    largest = num2;
} else if (num3 >= num1 && num3 >= num2 && num3 >= num4 && num3 >= num5) {
    largest = num3;
} else if (num4 >= num1 && num4 >= num2 && num4 >= num3 && num4 >= num5) {
    largest = num4;
} else {
    largest = num5;
}

// Displaying the largest number in an alert box
alert(`The largest number is: ${largest}`);
