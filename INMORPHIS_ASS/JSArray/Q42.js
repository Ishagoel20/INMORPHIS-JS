/*Write a JavaScript function to find the unique elements from two arrays.
Test Data :
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
["1", "2", "3", "10", "100"]
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
["1", "2", "3", "4", "5", "6"]
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
["1", "2", "3", "10", "100"]*/

function difference(array1, array2) {
    // Convert arrays to sets to handle uniqueness
    let set1 = new Set(array1.map(item => item.toString()));
    let set2 = new Set(flatten(array2).map(item => item.toString()));

    // Merge sets and convert back to array
    let mergedArray = Array.from(new Set([...set1, ...set2]));

    return mergedArray;
}

// Helper function to flatten nested arrays
function flatten(arr) {
    return arr.reduce(function (flat, toFlatten) {
        return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
    }, []);
}

// Test data
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// Output: ["1", "2", "3", "10", "100"]

console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
// Output: ["1", "2", "3", "4", "5", "6"]

console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// Output: ["1", "2", "3", "10", "100"]
