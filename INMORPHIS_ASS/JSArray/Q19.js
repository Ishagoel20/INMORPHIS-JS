/*There are two arrays with individual values, write a JavaScript program to 
compute the sum of each individual index value from the given arrays.
Sample array :
array1 = [1,0,2,3,4];
array2 = [3,5,6,7,8,13];
Expected Output :
[4, 5, 8, 10, 12, 13]*/

function computeSumOfArrays(array1, array2) {
    // Determine the length of the result array based on the longer array
    let maxLength = Math.max(array1.length, array2.length);
    
    // Initialize an array to store the sums
    let result = [];
    
    // Iterate through each index up to the maxLength
    for (let i = 0; i < maxLength; i++) {
        // Get the element from each array; default to 0 if undefined
        let num1 = array1[i] || 0;
        let num2 = array2[i] || 0;
        
        // Compute the sum and add it to the result array
        result.push(num1 + num2);
    }
    
    return result;
}

// Sample arrays
let array1 = [1, 0, 2, 3, 4];
let array2 = [3, 5, 6, 7, 8, 13];

// Compute the sum of arrays
let output = computeSumOfArrays(array1, array2);

// Output the result
console.log(output); // Output: [4, 5, 8, 10, 12, 13]
