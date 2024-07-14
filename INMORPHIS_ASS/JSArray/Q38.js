/*Write a JavaScript function to move an array element from one position to 
another.
Test Data :
console.log(move([10, 20, 30, 40, 50], 0, 2));
[20, 30, 10, 40, 50]
console.log(move([10, 20, 30, 40, 50], -1, -2));
[10, 20, 30, 50, 40]*/


function move(array, fromIndex, toIndex) {
    // Check if fromIndex or toIndex is out of bounds
    if (fromIndex < 0) {
        fromIndex = array.length + fromIndex; // convert negative index to positive index
    }
    if (toIndex < 0) {
        toIndex = array.length + toIndex; // convert negative index to positive index
    }

    // Remove the element from the array at fromIndex
    let element = array.splice(fromIndex, 1)[0];

    // Insert the element into the array at toIndex
    array.splice(toIndex, 0, element);

    return array;
}

// Test data
console.log(move([10, 20, 30, 40, 50], 0, 2));  // Output: [20, 30, 10, 40, 50]
console.log(move([10, 20, 30, 40, 50], -1, -2)); // Output: [10, 20, 30, 50, 40]
