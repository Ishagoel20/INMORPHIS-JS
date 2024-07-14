//Write a JavaScript program to sort the items of an array.Sample array : var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];Sample Output : -4,-3,1,2,3,5,6,7,8

// Sample array
var arr1 = [3, 8, 7, 6, 5, -4, 3, 2, 1];

// Sorting the array using sort() with a comparison function
arr1.sort(function(a, b) {
    return a - b;
});

// Print the sorted array
console.log(arr1.join(',')); // Output: "-4,1,2,3,3,5,6,7,8"
