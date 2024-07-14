/*Write a JavaScript function to get ISO-8601 week number of year, weeks 
starting on Monday.
Example : 42 (the 42nd week in the year)
Test Data :
dt = new Date(2015, 10, 1);
console.log(ISO8601_week_no(dt));
44*/

function ISO8601_week_no(date) {
    // Copy the date object to avoid mutating the original
    let dt = new Date(date);

    // Set the target date to the nearest Monday
    dt.setHours(0, 0, 0, 0);
    dt.setDate(dt.getDate() + 4 - (dt.getDay() || 7));

    // Get the year of the Monday
    let yearStart = new Date(dt.getFullYear(), 0, 1);

    // Calculate full weeks between the year start and the target date
    let weekNo = Math.ceil((((dt - yearStart) / 86400000) + 1) / 7);

    return weekNo;
}
let dt = new Date(2015, 10, 1);
console.log(ISO8601_week_no(dt)); // Output: 44

