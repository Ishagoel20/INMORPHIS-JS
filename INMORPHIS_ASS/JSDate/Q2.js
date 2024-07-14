/*Write a JavaScript function to get the current date.
Note : Pass a separator as an argument.
Test Data :
console.log(curday('/'));
console.log(curday('-'));
Output :
"11/13/2014"
"11-13-2014"*/

function curday(separator) {
    // Create a new Date object
    let today = new Date();

    // Get day, month, and year from the Date object
    let day = today.getDate();
    let month = today.getMonth() + 1; // January is 0
    let year = today.getFullYear();

    // Format the date according to the separator provided
    return `${month}${separator}${day}${separator}${year}`;
}


console.log(curday('/'));  // Output: "11/13/2024"
console.log(curday('-'));  // Output: "11-13-2024"
console.log(curday('.'));  // Output: "11.13.2024"
