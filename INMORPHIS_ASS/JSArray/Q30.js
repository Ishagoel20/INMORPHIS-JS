/*Write a JavaScript function to merge two arrays and removes all duplicates 
elements.
Test data :
var array1 = [1, 2, 3];
var array2 = [2, 30, 1];
console.log(merge_array(array1, array2));
[3, 2, 30, 1]*/

function merge_array(array1, array2) {
    // Merge arrays using concat and then create a Set to remove duplicates
    let mergedArray = array1.concat(array2);
    let uniqueArray = Array.from(new Set(mergedArray));

    return uniqueArray;
}

// Test data
var array1 = [1, 2, 3];
var array2 = [2, 30, 1];

// Output: [3, 2, 30, 1]
console.log(merge_array(array1, array2));
