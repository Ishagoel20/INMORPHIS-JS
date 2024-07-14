/*Write a JavaScript program to compute the exponent of a number.
Note : The exponent of a number says how many times the base number is used 
as a factor.
82 = 8 x 8 = 64. Here 8 is the base and 2 is the exponent.*/

function computeExponent(base, exponent) {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
}

// Example usage:
let base = 8;
let exponent = 2;
let result = computeExponent(base, exponent);
console.log(`${base}^${exponent} =`, result); // Output: 8^2 = 64
