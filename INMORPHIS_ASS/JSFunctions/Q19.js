//Write a JavaScript function that returns array elements larger than a number

function elementsGreaterThan(arr, number) {
    let result = [];

    
    for (let i = 0; i < arr.length; i++) {
        
        if (arr[i] > number) {
            result.push(arr[i]); 
        }
    }

    return result;
}


let array = [1, 5, 8, 10, 3, 6];
let threshold = 5;

console.log(elementsGreaterThan(array, threshold));
