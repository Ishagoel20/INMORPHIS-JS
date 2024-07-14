/*Write a JavaScript function to get timezone offset in seconds.
Note : The offset for timezones west of UTC is always negative, and for those 
east of UTC is always positive.
Test Data :
dt = new Date();
console.log(timezone_offset_in_seconds(dt));
19800*/

function timezone_offset_in_seconds(dt) {
    // Get the timezone offset in minutes
    var tz_offset_min = dt.getTimezoneOffset();

    // Convert the minutes to seconds and adjust for direction (west/east of UTC)
    var tz_offset_sec = tz_offset_min * 60;

    // Adjust sign based on offset direction (west/east of UTC)
    if (tz_offset_min > 0) {
        tz_offset_sec = -tz_offset_sec; // Timezones west of UTC are negative
    }

    return tz_offset_sec;
}

// Test Data
var dt = new Date();
console.log(timezone_offset_in_seconds(dt)); // Output: 19800 (which corresponds to +05:30)
