//Write a JavaScript program to find the most frequent item of an array.Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];Sample Output : a ( 5 times )

function mostFrequent(arr) {
    // Initialize an object to store frequency of each item
    let freqMap = {};
    let maxCount = 0;
    let maxItem = null;

    // Iterate through the array and count occurrences of each item
    arr.forEach(function(item) {
        if (freqMap[item] == null) {
            freqMap[item] = 1;
        } else {
            freqMap[item]++;
        }

        // Update maxItem and maxCount if current item's count is higher
        if (freqMap[item] > maxCount) {
            maxCount = freqMap[item];
            maxItem = item;
        }
    });

    // Return the item with its frequency
    return `${maxItem} ( ${maxCount} times )`;
}

// Sample array
var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

// Output the most frequent item
console.log(mostFrequent(arr1)); // Output: "a ( 5 times )"
