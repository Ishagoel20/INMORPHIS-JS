/*Write a JavaScript function to clone an array.
Test Data :
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));
[1, 2, 4, 0]
[1, 2, [4, 0]]*/

// Function to clone an array (including handling nested arrays)
function array_Clone(arr) {
    let clonedArray = [];

    // Iterate through the array
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            // If element is an array, recursively clone it
            clonedArray[i] = array_Clone(arr[i]);
        } else {
            // Copy primitive values directly
            clonedArray[i] = arr[i];
        }
    }

    return clonedArray;
}

// Test Data
console.log(array_Clone([1, 2, 4, 0]));     // [1, 2, 4, 0]
console.log(array_Clone([1, 2, [4, 0]]));   // [1, 2, [4, 0]]
