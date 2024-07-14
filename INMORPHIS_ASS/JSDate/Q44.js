/*Write a JavaScript function to get time differences in minutes between two 
dates.
Test Data :
dt1 = new Date("October 13, 2014 11:11:00");
dt2 = new Date("October 13, 2014 11:13:00");
console.log(diff_minutes(dt1, dt2));
2*/

function diff_minutes(dt1, dt2) {
    var diff = Math.abs(dt1.getTime() - dt2.getTime());
    var minutes = Math.floor(diff / (1000 * 60)); // Calculate difference in minutes
    return minutes;
}

// Test Data
var dt1 = new Date("October 13, 2014 11:11:00");
var dt2 = new Date("October 13, 2014 11:13:00");
console.log(diff_minutes(dt1, dt2)); // Output: 2
