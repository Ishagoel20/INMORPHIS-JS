/*Write a JavaScript function to get time differences in days between two 
dates.
Test Data :
dt1 = new Date("October 13, 2014 08:11:00");
dt2 = new Date("October 19, 2014 11:13:00");
console.log(diff_days(dt1, dt2));
6*/

function diff_days(dt1, dt2) {
    // One day in milliseconds
    var one_day = 1000 * 60 * 60 * 24;

    // Convert both dates to milliseconds
    var date1_ms = dt1.getTime();
    var date2_ms = dt2.getTime();

    // Calculate the difference in milliseconds
    var difference_ms = Math.abs(date2_ms - date1_ms);

    // Convert back to days and return
    return Math.floor(difference_ms / one_day);
}

// Test Data
var dt1 = new Date("October 13, 2014 08:11:00");
var dt2 = new Date("October 19, 2014 11:13:00");
console.log(diff_days(dt1, dt2)); // Output: 6

