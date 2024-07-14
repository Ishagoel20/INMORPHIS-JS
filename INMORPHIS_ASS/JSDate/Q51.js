//Write a JavaScript function to get the week end date.

function getWeekEndDate(date) {
    var day = date.getDay(); // Get the day of the week (0 - 6)
    var diff = 6 - day; // Calculate the difference to add for end of week (Saturday)

    // Adjust to get the end of the week (Saturday)
    var endDate = new Date(date);
    endDate.setDate(date.getDate() + diff);
    return endDate;
}

// Example Usage:
var today = new Date(); // Current date
var weekEndDate = getWeekEndDate(today);

console.log(weekEndDate); // Output: Sat Jul 14 2024 00:00:00 GMT+0000 (Coordinated Universal Time)
