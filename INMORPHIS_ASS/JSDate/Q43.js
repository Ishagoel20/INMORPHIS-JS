/*Write a JavaScript function to add specified months to a date.
Test Data :
dt = new Date(2014,10,2);
console.log(add_months(dt, 10).toString());
Output :
"Wed Sep 02 2015 00:00:00 GMT+0530 (India Standard Time)"*/

function add_months(date, months) {
    // Create a new Date object to avoid modifying the original date
    var new_date = new Date(date);

    // Get the current month and year
    var current_month = new_date.getMonth();
    var new_month = current_month + months;

    // Calculate the year offset
    var year_offset = Math.floor(new_month / 12);

    // Calculate the new month (adjusting for year change if necessary)
    new_date.setMonth(new_month % 12);

    // Handle cases where the new month exceeds 12 or is negative
    if (new_month > 11) {
        new_date.setFullYear(new_date.getFullYear() + year_offset);
    } else if (new_month < 0) {
        new_date.setFullYear(new_date.getFullYear() + year_offset - 1);
        new_date.setMonth(12 + (new_month % 12));
    }

    return new_date;
}

// Test Data
var dt = new Date(2014, 10, 2); // November is represented by 10 (0-indexed)
console.log(add_months(dt, 10).toString());
