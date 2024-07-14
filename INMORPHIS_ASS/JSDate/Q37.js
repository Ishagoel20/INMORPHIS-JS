/*Write a JavaScript function to get Timezone.
Test Data :
dt = new Date();
console.log(seconds_with_leading_zeros(dt));
// "India Standard Time"*/

function get_timezone(date) {
    // Get the timezone offset in minutes
    let timezoneOffset = date.getTimezoneOffset();

    // Calculate the sign of the offset (+/-)
    let offsetSign = timezoneOffset > 0 ? '-' : '+';

    // Calculate the absolute value of the offset in hours and minutes
    let offsetHours = Math.floor(Math.abs(timezoneOffset) / 60);
    let offsetMinutes = Math.abs(timezoneOffset) % 60;

    // Create a timezone string in UTC format (+/-HH:MM)
    let timezoneString = `UTC${offsetSign}${('0' + offsetHours).slice(-2)}:${('0' + offsetMinutes).slice(-2)}`;

    // Create a date string to get the full timezone name
    let dateString = date.toLocaleString('en', { timeZoneName: 'long' });
    let timezoneName = dateString.split(' ').pop();

    return timezoneName;
}

// Example usage:
let dt = new Date();
console.log(get_timezone(dt)); // Output: "India Standard Time"
