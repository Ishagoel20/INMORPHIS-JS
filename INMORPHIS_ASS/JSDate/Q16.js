/*Write a JavaScript function to count the number of days passed since 
beginning of the year.
Test Data :
console.log(days_passed(new Date(2015, 0, 15)));
15
console.log(days_passed(new Date(2015, 11, 14)));
348*/

function days_passed(date) {
    // Calculate the first day of the year
    let startOfYear = new Date(date.getFullYear(), 0, 0);

    // Calculate the difference in milliseconds between the given date and the start of the year
    let diff = date - startOfYear;

    // Convert the difference from milliseconds to days
    let oneDay = 1000 * 60 * 60 * 24;
    let daysPassed = Math.floor(diff / oneDay);

    // Return the number of days passed
    return daysPassed;
}
console.log(days_passed(new Date(2015, 0, 15))); // Output: 15 (January 15th)
console.log(days_passed(new Date(2015, 11, 14))); // Output: 348 (December 14th)
