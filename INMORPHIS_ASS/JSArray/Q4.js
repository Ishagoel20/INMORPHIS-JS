/*Write a JavaScript function to get the last element of an array. Passing a 
parameter 'n' will return the last 'n' elements of the array.
Test Data :
console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));
Expected Output :
-2
[9, 0, -2]
[7, 9, 0, -2]*/

// Function to get the last n elements of an array
function last(arr, n = 1) {
    // Return the last element if n is not specified or 1
    if (n >= 0) {
        return arr.slice(-n);
    } else {
        return [];
    }
}

// Test Data
console.log(last([7, 9, 0, -2]));     // [-2]
console.log(last([7, 9, 0, -2], 3));  // [9, 0, -2]
console.log(last([7, 9, 0, -2], 6));  // [7, 9, 0, -2]
