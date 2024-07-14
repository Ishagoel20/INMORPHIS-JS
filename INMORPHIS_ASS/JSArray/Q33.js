//Write a JavaScript script to empty an array keeping the original

function emptyArrayKeepingOriginal(arr) {
    // Create a new array using slice method
    let newArray = arr.slice();
    
    // Empty the original array
    arr.length = 0;
    
    // Return the new array (which contains the original elements)
    return newArray;
}

// Example usage:
let originalArray = [1, 2, 3, 4, 5];
let emptiedArray = emptyArrayKeepingOriginal(originalArray);

console.log("Original Array:", originalArray); // Output: [1, 2, 3, 4, 5]
console.log("Emptied Array:", emptiedArray);   // Output: []
