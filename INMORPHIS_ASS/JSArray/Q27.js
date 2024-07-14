/*Write a JavaScript function to retrieve the value of a given property from all 
elements in an array.
Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
Expected result : [15, -22, 47]*/

function retrieveValues(arr) {
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

// Retrieve values from the array
let result = retrieveValues(sampleArray);
console.log(result); // Output: [15, -22, 47]
