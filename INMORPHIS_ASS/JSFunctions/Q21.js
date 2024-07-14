//Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array.Sample array : [1, 2, 3] and subset length is 2 Expected output : [[2, 1], [3, 1], [3, 2], [3, 2, 1]]

function getSubsets(arr, k) {
    let results = [];
    let n = arr.length;

    for (let i = 0; i < (1 << n); i++) {
        if (countBits(i) === k) {
            let subset = [];
            for (let j = 0; j < n; j++) {
                if (i & (1 << j)) {
                    subset.push(arr[j]);
                }
            }
            results.push(subset);
        }
    }

    return results;
}


function countBits(num) {
    let count = 0;
    while (num > 0) {
        count += num & 1;
        num >>= 1;
    }
    return count;
}


let array = [1, 2, 3];
let subsetLength = 2;

let subsets = getSubsets(array, subsetLength);
console.log(subsets); 

let array2 = [1, 2, 3, 4];
let subsetLength2 = 3;

let subsets2 = getSubsets(array2, subsetLength2);
console.log(subsets2);

