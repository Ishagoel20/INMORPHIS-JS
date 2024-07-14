//Write a JavaScript function to get the week start date.

function getWeekStartDate(date) {
    var day = date.getDay(); // Get the day of the week (0 - 6)
    var diff = date.getDate() - day; // Calculate the difference to subtract

    // Adjust to get the start of the week (Sunday)
    return new Date(date.setDate(diff));
}

// Example Usage:
var today = new Date(); // Current date
var weekStartDate = getWeekStartDate(today);

console.log(weekStartDate); // Output: Sun Jul 08 2024 00:00:00 GMT+0000 (Coordinated Universal Time)
