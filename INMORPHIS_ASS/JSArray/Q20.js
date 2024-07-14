//Write a JavaScript program to find duplicate values in a JavaScript array

function findDuplicatesUsingSet(arr) {
    let seen = new Set();
    let duplicates = new Set();

    for (let i = 0; i < arr.length; i++) {
        if (seen.has(arr[i])) {
            duplicates.add(arr[i]);
        } else {
            seen.add(arr[i]);
        }
    }

    return Array.from(duplicates); // Convert Set to array (if needed)
}

// Example usage:
let array1 = [1, 2, 3, 4, 2, 5, 6, 3, 7];
let duplicates = findDuplicatesUsingSet(array1);
console.log("Duplicate values:", duplicates); // Output: [2, 3]
