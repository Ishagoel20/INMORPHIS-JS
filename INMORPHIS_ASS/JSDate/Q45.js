/*Write a JavaScript function to get time differences in hours between two 
dates.
Test Data :
dt1 = new Date("October 13, 2014 08:11:00");
dt2 = new Date("October 13, 2014 11:13:00");
console.log(diff_hours(dt1, dt2));
3*/

function diff_hours(dt1, dt2) {
    var diff = Math.abs(dt1.getTime() - dt2.getTime());
    var hours = Math.floor(diff / (1000 * 60 * 60)); // Calculate difference in hours
    return hours;
}

// Test Data
var dt1 = new Date("October 13, 2014 08:11:00");
var dt2 = new Date("October 13, 2014 11:13:00");
console.log(diff_hours(dt1, dt2)); // Output: 3
