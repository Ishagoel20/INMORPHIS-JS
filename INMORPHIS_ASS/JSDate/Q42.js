/*Write a JavaScript function to add specified weeks to a date.
Test Data :
dt = new Date(2014,10,2);
console.log(add_weeks(dt, 10).toString());
Output :
"Sun Jan 11 2015 00:00:00 GMT+0530 (India Standard Time)"*/

function add_weeks(date, weeks) {
    // Create a new Date object to avoid modifying the original date
    var new_date = new Date(date);

    // Calculate the number of milliseconds in one week
    var milliseconds_in_week = 7 * 24 * 60 * 60 * 1000;

    // Add the specified number of weeks
    new_date.setTime(new_date.getTime() + weeks * milliseconds_in_week);

    return new_date;
}

// Test Data
var dt = new Date(2014, 10, 2); // November is represented by 10 (0-indexed)
console.log(add_weeks(dt, 10).toString());
