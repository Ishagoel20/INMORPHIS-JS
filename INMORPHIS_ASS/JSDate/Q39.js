/*Write a JavaScript function to get difference to Greenwich time (GMT) in 
hours.
Test Data :
dt = new Date();
console.log(diff_to_GMT(dt));
"+05.500"*/

function diff_to_GMT(dt) {
    // Get the timezone offset in minutes
    var tz_offset_min = dt.getTimezoneOffset();

    // Convert the minutes to hours by dividing by 60
    var tz_offset_hrs = tz_offset_min / 60;

    // Check if the offset is positive or negative
    var sign = tz_offset_hrs > 0 ? '-' : '+';

    // Get the absolute value of the offset hours
    tz_offset_hrs = Math.abs(tz_offset_hrs);

    // Get the hours part (without fractions)
    var hrs = Math.floor(tz_offset_hrs);

    // Get the minutes part (convert the remaining fraction to minutes)
    var min = Math.floor((tz_offset_hrs - hrs) * 60);

    // Format the output as required (+/-HH.MM)
    return `${sign}${hrs}.${min}00`;
}

// Test Data
var dt = new Date();
console.log(diff_to_GMT(dt));  // Output: "+05.500"
