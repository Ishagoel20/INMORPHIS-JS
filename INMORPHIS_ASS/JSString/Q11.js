/*Write a JavaScript function to convert a string into camel case.
Test Data :
console.log(camelize("JavaScript Exercises"));
console.log(camelize("JavaScript exercises"));
console.log(camelize("JavaScriptExercises"));
"JavaScriptExercises"
"JavaScriptExercises"
"JavaScriptExercises"*/

function camelize(str) {
    return str.replace(/\W+(.)/g, function(match, chr) {
        return chr.toUpperCase();
    });
}

// Test Data
console.log(camelize("JavaScript Exercises")); // Output: "JavaScriptExercises"
console.log(camelize("JavaScript exercises")); // Output: "JavaScriptExercises"
console.log(camelize("JavaScriptExercises")); // Output: "JavaScriptExercises"
