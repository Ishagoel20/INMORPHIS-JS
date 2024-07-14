/*Write a JavaScript function to get a numeric representation of a month, with 
leading zeros (01 through 12).
Test Data :
dt = new Date(2015, 10, 1);
console.log(numeric_month(dt));
"11"*/

function numeric_month(date) {
    // Get the month (0-11, where 0 is January)
    let month = date.getMonth() + 1; // Adding 1 because getMonth() returns 0-based index

    // Ensure the month is formatted with leading zeros if necessary
    let formattedMonth = ('0' + month).slice(-2);

    return formattedMonth;
}
let dt = new Date(2015, 10, 1);
console.log(numeric_month(dt)); // Output: "11"
