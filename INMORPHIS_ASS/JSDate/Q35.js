/*Write a JavaScript function to get minutes with leading zeros (00 to 59).
Test Data :
dt = new Date(1989, 10, 1);
console.log(minutes_with_leading_zeros(dt));
"00"*/

function minutes_with_leading_zeros(date) {
    // Get the minutes (0-59)
    let minutes = date.getMinutes();

    // Add leading zeros if necessary
    let formattedMinutes = ('0' + minutes).slice(-2);

    return formattedMinutes;
}

// Example usage:
let dt = new Date(1989, 10, 1);
console.log(minutes_with_leading_zeros(dt)); // Output: "00"

dt = new Date(1989, 10, 1, 13, 5); // 1:05 PM
console.log(minutes_with_leading_zeros(dt)); // Output: "05"
