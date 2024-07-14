/*Write a merge sort program in JavaScript.
Sample array : [34,7,23,32,5,62]
Sample output : [5, 7, 23, 32, 34, 62]*/

function mergeSort(array) {
    // Base case: If the array has 0 or 1 element, it is already sorted
    if (array.length <= 1) {
        return array;
    }

    // Find the middle point to divide the array into two halves
    const middle = Math.floor(array.length / 2);

    // Divide the array into two halves
    const leftHalf = mergeSort(array.slice(0, middle));
    const rightHalf = mergeSort(array.slice(middle));

    // Merge the two sorted halves
    return merge(leftHalf, rightHalf);
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Compare elements from left and right arrays and merge them in sorted order
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Concatenate any remaining elements from left and right arrays
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Example usage:
let array = [34, 7, 23, 32, 5, 62];
let sortedArray = mergeSort(array);
console.log("Sorted array:", sortedArray); // Output: Sorted array: [5, 7, 23, 32, 34, 62]
