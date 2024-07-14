/*Write a JavaScript program to construct the following pattern, using a nested 
for loop.
* 
* * 
* * * 
* * * * 
* * * * **/

// Define the number of rows for the pattern
const numberOfRows = 5;

// Outer loop for rows
for (let i = 1; i <= numberOfRows; i++) {
    let row = '';

    // Inner loop for columns in each row
    for (let j = 1; j <= i; j++) {
        row += '* ';
    }

    // Print the current row
    console.log(row);
}
