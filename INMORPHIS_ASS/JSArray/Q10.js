/*Write a JavaScript program which prints the elements of the following array.
Note : Use nested for loops.
Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 
26, 7]];
Sample Output :
"row 0"
" 1"
" 2"
" 1"
" 24"
"row 1"
------
-----*/

// Sample array
var a = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 26, 7]
];

// Iterate through each row
for (let i = 0; i < a.length; i++) {
    console.log("row " + i);
    
    // Iterate through each element in the current row
    for (let j = 0; j < a[i].length; j++) {
        console.log(" " + a[i][j]);
    }
    
    // Optional: To separate rows with a line
    console.log("------");
}
