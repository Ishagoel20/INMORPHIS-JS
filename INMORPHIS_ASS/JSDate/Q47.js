/*Write a JavaScript function to get time differences in weeks between two 
dates.
Test Data :
dt1 = new Date("June 13, 2014 08:11:00");
dt2 = new Date("October 19, 2014 11:13:00");
console.log(diff_weeks(dt1, dt2));
18*/

function diff_weeks(dt1, dt2) {
    // One week in milliseconds
    var one_week = 1000 * 60 * 60 * 24 * 7;

    // Convert both dates to milliseconds
    var date1_ms = dt1.getTime();
    var date2_ms = dt2.getTime();

    // Calculate the difference in milliseconds
    var difference_ms = Math.abs(date2_ms - date1_ms);

    // Convert back to weeks and return
    return Math.floor(difference_ms / one_week);
}

// Test Data
var dt1 = new Date("June 13, 2014 08:11:00");
var dt2 = new Date("October 19, 2014 11:13:00");
console.log(diff_weeks(dt1, dt2)); // Output: 18

