/* Write a JavaScript function to print all the methods in an JavaScript object.
Test Data :
console.log(all_properties(Array));
["length", "name", "arguments", "caller", "prototype", "isArray", "observe", 
"unobserve"]*/

function allMethods(obj) {
    // Check if obj is a valid object
    if (typeof obj !== 'object' || obj === null) {
        return [];
    }

    // Initialize an empty array to store method names
    var methods = [];

    // Iterate through all properties of the object
    for (var prop in obj) {
        // Check if the property is a function (method)
        if (typeof obj[prop] === 'function') {
            methods.push(prop);
        }
    }

    return methods;
}

// Example usage:
console.log(allMethods(Array));
