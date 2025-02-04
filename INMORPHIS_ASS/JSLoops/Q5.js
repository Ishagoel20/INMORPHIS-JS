/*Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it 
will check if the current number is odd or even, and display a message to the 
screen.
Sample Output :
"0 is even"
"1 is odd"
"2 is even"
----------
----------*/

// Loop from 0 to 15
for (let i = 0; i <= 15; i++) {
    // Check if the current number is even or odd
    if (i % 2 === 0) {
        console.log(`${i} is even`);
    } else {
        console.log(`${i} is odd`);
    }
}
