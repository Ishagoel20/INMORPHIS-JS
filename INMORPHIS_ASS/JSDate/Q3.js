/*Write a JavaScript function to get the number of days in a month.
Test Data :
console.log(getDaysInMonth(1, 2012));
console.log(getDaysInMonth(2, 2012));
console.log(getDaysInMonth(9, 2012));
console.log(getDaysInMonth(12, 2012));
Output :
31
29
30
31*/

function getDaysInMonth(month, year) {
    // Adjust month (0: January, 1: February, ..., 11: December)
    // Create a new Date object for the first day of the next month
    let date = new Date(year, month, 1);
    
    // Subtract one day from the date to get the last day of the specified month
    date.setHours(date.getHours() - 1);

    // Return the date of the month (number of days)
    return date.getDate();
}


console.log(getDaysInMonth(1, 2012));  // Output: 31 (January)
console.log(getDaysInMonth(2, 2012));  // Output: 29 (February, leap year)
console.log(getDaysInMonth(9, 2012));  // Output: 30 (September)
console.log(getDaysInMonth(12, 2012)); // Output: 31 (December)
