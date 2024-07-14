/*Write a Bubble Sort algorithm in JavaScript.
Note : Bubble sort is a simple sorting algorithm that works by repeatedly stepping 
through the list to be sorted,
Sample Data : [6,4,0, 3,-2,1]
Expected Output : [-2, 0, 1, 3, 4, 6]*/

function bubbleSort(arr) {
    var len = arr.length;
    var swapped;
    
    do {
        swapped = false;
        for (var i = 0; i < len - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Swap elements arr[i] and arr[i + 1]
                var temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

    return arr;
}

// Example usage:
var arr = [6, 4, 0, 3, -2, 1];
console.log("Original array:", arr);
console.log("Sorted array:", bubbleSort(arr));

