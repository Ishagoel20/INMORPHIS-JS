//Write a JavaScript function to get the month start date.

function getMonthStartDate(date) {
    // Create a new date object to avoid modifying the original date
    var startDate = new Date(date);

    // Set the date to the 1st of the month
    startDate.setDate(1);

    return startDate;
}

// Example Usage:
var today = new Date(); // Current date
var monthStartDate = getMonthStartDate(today);

console.log(monthStartDate); // Output: Sun Jul 01 2024 00:00:00 GMT+0000 (Coordinated Universal Time)
