//Write a function for searching JavaScript arrays with a binary search.Note : A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        
        let mid = Math.floor((left + right) / 2);

        
        if (arr[mid] === target) {
            return mid;
        }
        
        
        if (arr[mid] < target) {
            left = mid + 1;
        }
        
        else {
            right = mid - 1;
        }
    }

    
    return -1;
}


let sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17];
let target1 = 9;
let target2 = 10;

console.log(binarySearch(sortedArray, target1));  
console.log(binarySearch(sortedArray, target2));  
