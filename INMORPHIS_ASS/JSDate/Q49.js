/*Write a JavaScript function to get time differences in years between two 
dates.
Test Data :
dt1 = new Date("June 13, 2014 08:11:00");
dt2 = new Date("October 19, 2017 11:13:00");
console.log(diff_years(dt1, dt2));
3*/

function diff_years(dt1, dt2) {
    var diff = dt2.getFullYear() - dt1.getFullYear();

    // Adjust for months
    if (dt2.getMonth() < dt1.getMonth() || (dt2.getMonth() === dt1.getMonth() && dt2.getDate() < dt1.getDate())) {
        diff--;
    }

    return diff;
}

// Test Data
var dt1 = new Date("June 13, 2014 08:11:00");
var dt2 = new Date("October 19, 2017 11:13:00");
console.log(diff_years(dt1, dt2)); // Output: 3
