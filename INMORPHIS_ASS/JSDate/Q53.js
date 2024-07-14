//Write a JavaScript function to get the month end date

function getMonthEndDate(date) {
    // Get the year and month of the provided date
    var year = date.getFullYear();
    var month = date.getMonth();

    // Create a new date for the next month's first day
    var nextMonthFirstDay = new Date(year, month + 1, 1);

    // Subtract one day from the next month's first day to get the last day of the current month
    var endDate = new Date(nextMonthFirstDay);
    endDate.setDate(nextMonthFirstDay.getDate() - 1);

    return endDate;
}

// Example Usage:
var today = new Date(); // Current date
var monthEndDate = getMonthEndDate(today);

console.log(monthEndDate); // Output: Tue Jul 31 2024 00:00:00 GMT+0000 (Coordinated Universal Time)
