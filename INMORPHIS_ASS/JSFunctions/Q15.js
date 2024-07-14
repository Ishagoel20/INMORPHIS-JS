//Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result.

function computePower(base, exponent) {
    
    let result = Math.pow(base, exponent);
    return result;
}


let base = prompt("Enter the base (b):");
let exponent = prompt("Enter the exponent (n):");


base = parseFloat(base);
exponent = parseFloat(exponent);


if (!isNaN(base) && !isNaN(exponent)) {
    let power = computePower(base, exponent);
    console.log(`${base}^${exponent} = ${power}`);
} else {
    console.log("Please enter valid numbers for base and exponent.");
}
