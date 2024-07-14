/*Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 
'NaN' values from an array.
Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
Expected result : [15, -22, 47]*/

function cleanArray(arr) {
    // Filter out falsy values and NaN
    return arr.filter(item => {
        return item !== null && 
               item !== 0 && 
               item !== "" && 
               item !== false && 
               item !== undefined && 
               !Number.isNaN(item);
    });
}

// Sample array
let sampleArray = [NaN, 0, 15, false, -22, '', undefined, 47, null];

// Clean the array
let cleanedArray = cleanArray(sampleArray);
console.log(cleanedArray); // Output: [15, -22, 47]

