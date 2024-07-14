/*Write a JavaScript function to get a full textual representation of the day of 
the week (Sunday through Saturday).
Test Data :
dt = new Date(2015, 10, 1);
console.log(long_Days(dt));
"Sunday"*/

function long_Days(date) {
    // Define options for toLocaleDateString()
    let options = { weekday: 'long' };

    // Use toLocaleDateString() to get the full day name
    let dayName = date.toLocaleDateString('en-US', options);

    return dayName;
}
let dt = new Date(2015, 10, 1);
console.log(long_Days(dt)); // Output: "Sunday"
