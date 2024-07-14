/*Write a JavaScript function to get nth largest element from an unsorted 
array.
Test Data :
console.log(nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4));
89*/

function nthlargest(arr, n) {
    // Sort the array in descending order
    arr.sort(function(a, b) {
        return b - a;
    });

    // Return the nth largest element
    return arr[n - 1];
}

// Test data
console.log(nthlargest([43, 56, 23, 89, 88, 90, 99, 652], 4)); // Output: 89

