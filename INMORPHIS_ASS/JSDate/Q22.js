/*Write a JavaScript function to get ISO-8601 numeric representation of the 
day of the week (1 (for Monday) to 7 (for Sunday)).
Test Data :
dt = new Date(2015, 10, 1);
console.log(ISO_numeric_date(dt));
7*/

function ISO_numeric_date(date) {
    // Get the day of the week (0-6, where 0 is Sunday)
    let dayOfWeek = date.getDay();

    // Adjust to ISO-8601 numeric representation (1-7)
    if (dayOfWeek === 0) {
        dayOfWeek = 7; // Sunday should be represented as 7 in ISO-8601
    }

    return dayOfWeek;
}
let dt = new Date(2015, 10, 1);
console.log(ISO_numeric_date(dt)); // Output: 7
