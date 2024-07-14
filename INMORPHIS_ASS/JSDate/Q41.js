/*Write a JavaScript function to add specified years to a date.
Test Data :
dt = new Date(2014,10,2);
console.log(add_years(dt, 10).toString());
Output :
"Sat Nov 02 2024 00:00:00 GMT+0530 (India Standard Time)"*/

function add_years(date, years) {
    // Create a new Date object to avoid modifying the original date
    var new_date = new Date(date);

    // Add the specified number of years
    new_date.setFullYear(new_date.getFullYear() + years);

    return new_date;
}

// Test Data
var dt = new Date(2014, 10, 2); // November is represented by 10 (0-indexed)
console.log(add_years(dt, 10).toString());
