/*Write a JavaScript conditional statement to sort three numbers. Display an 
alert box to show the result.
Sample numbers : 0, -1, 4
Output : 4, 0, -1*/

// Sample numbers
let num1 = 0;
let num2 = -1;
let num3 = 4;

// Variables to store sorted numbers
let first, second, third;

// Sorting logic using conditional statements
if (num1 >= num2 && num1 >= num3) {
    first = num1;
    if (num2 >= num3) {
        second = num2;
        third = num3;
    } else {
        second = num3;
        third = num2;
    }
} else if (num2 >= num1 && num2 >= num3) {
    first = num2;
    if (num1 >= num3) {
        second = num1;
        third = num3;
    } else {
        second = num3;
        third = num1;
    }
} else {
    first = num3;
    if (num1 >= num2) {
        second = num1;
        third = num2;
    } else {
        second = num2;
        third = num1;
    }
}

// Displaying the sorted numbers in an alert box
alert(`Sorted numbers: ${first}, ${second}, ${third}`);
