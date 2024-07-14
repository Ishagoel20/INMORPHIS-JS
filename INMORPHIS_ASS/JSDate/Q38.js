/*Write a JavaScript function to find whether or not the date is in daylights 
savings time.
Test Data :
dt = new Date();
console.log(daylights_savings(dt));
1*/

function daylights_savings(date) {
    // Get the timezone offset for the given date
    let standardTimeOffset = date.getTimezoneOffset();

    // Create a date in January (outside of DST)
    let januaryDate = new Date(date.getFullYear(), 0, 1);

    // Get the timezone offset for January (typically standard time)
    let januaryTimeOffset = januaryDate.getTimezoneOffset();

    // Compare the offsets
    if (standardTimeOffset !== januaryTimeOffset) {
        return 1; // Indicates that the date is in daylight saving time
    } else {
        return 0; // Indicates that the date is not in daylight saving time
    }
}

// Example usage:
let dt = new Date();
console.log(daylights_savings(dt)); // Output: 1 (if currently in daylight saving time)

