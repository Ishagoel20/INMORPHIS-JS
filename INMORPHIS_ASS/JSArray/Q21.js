/*Write a JavaScript program to flatten a nested (any depth) array. If you pass 
shallow, the array will only be flattened a single level.
Sample Data :
console.log(flatten([1, [2], [3, [[4]]],[5,6]]));
[1, 2, 3, 4, 5, 6]
console.log(flatten([1, [2], [3, [[4]]],[5,6]], true));
[1, 2, 3, [[4]], 5, 6]*/

function flatten(arr, shallow = false) {
    let flattened = [];

    arr.forEach(item => {
        if (Array.isArray(item) && !shallow) {
            flattened.push(...flatten(item));
        } else {
            flattened.push(item);
        }
    });

    return flattened;
}

// Example usage:
console.log(flatten([1, [2], [3, [[4]]],[5,6]]));
// Output: [1, 2, 3, 4, 5, 6]

console.log(flatten([1, [2], [3, [[4]]],[5,6]], true));
// Output: [1, 2, 3, [[4]], 5, 6]

