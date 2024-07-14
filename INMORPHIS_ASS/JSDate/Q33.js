/*Write a JavaScript function to get 12-hour format of an hour with leading 
zeros.
Test Data :
dt = new Date(1989, 10, 1);
console.log(hours_with_zeroes(dt));
"12"*/

function hours_with_zeroes(date) {
    // Get the hour (0-23)
    let hours = date.getHours();

    // Convert to 12-hour format
    let hours12 = hours % 12;
    
    // Handle midnight and noon
    if (hours12 === 0) {
        hours12 = 12; // Midnight should be shown as 12 AM
    }

    // Add leading zeros if necessary
    let formattedHours = ('0' + hours12).slice(-2);

    return formattedHours;
}

// Example usage:
let dt = new Date(1989, 10, 1, 0); // Midnight
console.log(hours_with_zeroes(dt)); // Output: "12"

dt = new Date(1989, 10, 1, 13); // 1 PM
console.log(hours_with_zeroes(dt)); // Output: "01"
