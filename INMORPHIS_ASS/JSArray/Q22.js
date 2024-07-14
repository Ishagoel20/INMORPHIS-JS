/*Write a JavaScript program to compute the union of two arrays.
Sample Data :
console.log(union([1, 2, 3], [100, 2, 1, 10]));
[1, 2, 3, 10, 100]*/

function union(arr1, arr2) {
    // Create a Set to store unique elements
    let unionSet = new Set(arr1);

    // Add elements from arr2 to the Set
    arr2.forEach(item => {
        unionSet.add(item);
    });

    // Convert Set back to an array and return
    return Array.from(unionSet);
}

// Example usage:
console.log(union([1, 2, 3], [100, 2, 1, 10]));
// Output: [1, 2, 3, 100, 10]
