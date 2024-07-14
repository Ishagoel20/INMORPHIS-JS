/*Write a JavaScript function to get time differences in months between two 
dates.
Test Data :
dt1 = new Date("June 13, 2014 08:11:00");
dt2 = new Date("October 19, 2014 11:13:00");
console.log(diff_months(dt1, dt2));
5*/

function diff_months(dt1, dt2) {
    var diff = (dt2.getFullYear() - dt1.getFullYear()) * 12 + (dt2.getMonth() - dt1.getMonth());
    if (dt2.getDate() < dt1.getDate()) {
        diff--;
    }
    return diff;
}

// Test Data
var dt1 = new Date("June 13, 2014 08:11:00");
var dt2 = new Date("October 19, 2014 11:13:00");
console.log(diff_months(dt1, dt2)); // Output: 5
