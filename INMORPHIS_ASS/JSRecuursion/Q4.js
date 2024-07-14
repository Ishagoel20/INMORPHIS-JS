/*Write a JavaScript program to compute the sum of an array of integers.
Example : var array = [1, 2, 3, 4, 5, 6]
Expected Output : 21()*/

function sumArray(array) {
    let sum = 0;
    // Iterate through the array and add each element to sum
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

// Example usage:
let array = [1, 2, 3, 4, 5, 6];
let result = sumArray(array);
console.log("Sum of the array:", result); // Output: Sum of the array: 21

