/*Write a JavaScript function to get a two digit representation of a year.
Examples : 79 or 04
Test Data :
dt = new Date(1989, 10, 1);
console.log(sort_year(dt));
"89"*/

function short_year(date) {
    // Get the full year (4 digits)
    let year = date.getFullYear();

    // Extract the last two digits
    let shortYear = ('' + year).slice(-2);

    return shortYear;
}
let dt = new Date(1989, 10, 1);
console.log(short_year(dt)); // Output: "89"

