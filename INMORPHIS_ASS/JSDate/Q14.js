/*Write a JavaScript function to get the amount of days of a year.
Test Data :
console.log(days_of_a_year(2015));
365
console.log(days_of_a_year(2016));
366*/

function days_of_a_year(year) {
    // Check if the year is a leap year
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return 366; // Leap year has 366 days
    } else {
        return 365; // Standard year has 365 days
    }
}
console.log(days_of_a_year(2015)); // Output: 365
console.log(days_of_a_year(2016)); // Output: 366
