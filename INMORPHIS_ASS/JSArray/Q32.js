/*Write a JavaScript function to find an array contains a specific element.
Test data :
console.log(remove_array_element([2, 5, 9, 6], 5));
[2, 9, 6]*/

function remove_array_element(arr, element) {
    // Find the index of the element
    const index = arr.indexOf(element);
    
    // If element is found, remove it using splice
    if (index !== -1) {
        arr.splice(index, 1);
    }

    // Return the modified array
    return arr;
}

// Test data
console.log(remove_array_element([2, 5, 9, 6], 5)); // Output: [2, 9, 6]
console.log(remove_array_element([2, 5, 9, 6], 3)); // Output: [2, 5, 9, 6] (element not found)
