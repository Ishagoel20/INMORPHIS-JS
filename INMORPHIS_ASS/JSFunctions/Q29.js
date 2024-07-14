//Write a JavaScript function to get the function name.

function getFunctionName(func) {
    // Use the 'name' property of the function
    return func.name;
}

// Example usage:
function greet() {
    console.log("Hello, world!");
}

let functionName = getFunctionName(greet);
console.log(functionName); // Output: "greet"
