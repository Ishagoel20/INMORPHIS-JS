/*Write a JavaScript program for binary search.
Sample array : [0,1,2,3,4,5,6]
console.log(l.br_search(5)) will return '5*/

Array.prototype.binarySearch = function(target) {
    let left = 0;
    let right = this.length - 1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        // Check if target is present at mid
        if (this[mid] === target) {
            return mid;
        }
        
        // If target greater, ignore left half
        if (this[mid] < target) {
            left = mid + 1;
        }
        // If target is smaller, ignore right half
        else {
            right = mid - 1;
        }
    }
    
    // If target is not present in array
    return -1;
};

// Example usage:
let array = [0, 1, 2, 3, 4, 5, 6];
let target = 5;
let index = array.binarySearch(target);
console.log(`Index of ${target} in array:`, index); // Output: Index of 5 in array: 5
