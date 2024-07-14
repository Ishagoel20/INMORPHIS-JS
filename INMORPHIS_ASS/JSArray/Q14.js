//Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity)

function removeDuplicatesIgnoreCase(arr) {
    // Create an empty object to track unique items
    let uniqueMap = {};

    // Array to hold the final result
    let uniqueArray = [];

    // Loop through the array elements
    for (let i = 0; i < arr.length; i++) {
        // Convert each element to lowercase (ignore case sensitivity)
        let currentItem = arr[i].toLowerCase();

        // Check if the current item is already in uniqueMap
        if (!uniqueMap[currentItem]) {
            // If not in uniqueMap, add it to both uniqueMap and uniqueArray
            uniqueMap[currentItem] = true;
            uniqueArray.push(arr[i]);
        }
    }

    return uniqueArray;
}

// Example usage:
let arr = ["Apple", "banana", "apple", "Banana", "Orange", "orange"];
let uniqueArr = removeDuplicatesIgnoreCase(arr);
console.log(uniqueArr); // Output: ["Apple", "banana", "Orange"]
