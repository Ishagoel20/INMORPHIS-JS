/*Write a JavaScript function to find the difference of two arrays.
Test Data :
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
["3", "10", "100"]
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
["6"]
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
["3", "10", "100"]*/

function difference(arr1, arr2) {
    // Create a Set to store elements of arr2 for quick lookup
    let arr2Set = new Set();

    // Function to flatten an array (to handle nested arrays)
    function flattenArray(arr) {
        return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val), []);
    }

    // Flatten and populate arr2Set with elements from arr2
    flattenArray(arr2).forEach(item => {
        arr2Set.add(item);
    });

    // Filter elements from arr1 that are not in arr2Set
    let differenceArray = arr1.filter(item => !arr2Set.has(item));

    return differenceArray;
}

// Example usage:
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// Output: [3, 10, 100]

console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
// Output: [6]

console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// Output: [3, 10, 100]
