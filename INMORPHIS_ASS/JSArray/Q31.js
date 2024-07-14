/*Write a JavaScript function to remove a specific element from an array.
Test data :
console.log(remove_array_element([2, 5, 9, 6], 5));
[2, 9, 6]*/

function remove_array_element(arr, element) {
    const index = arr.indexOf(element);
    if (index !== -1) {
        arr.splice(index, 1);
    }
    return arr;
}

// Test data
console.log(remove_array_element([2, 5, 9, 6], 5)); // Output: [2, 9, 6]
console.log(remove_array_element([2, 5, 9, 6], 3)); // Output: [2, 5, 9, 6] (element not found)
