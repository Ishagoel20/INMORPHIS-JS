/*Write a JavaScript function to get a full textual representation of a month, 
such as January or June.
Test Data :
dt = new Date(2015, 10, 1);
console.log(full_month(dt));
"November"*/

function full_month(date) {
    // Define options for toLocaleDateString()
    let options = { month: 'long' };

    // Use toLocaleDateString() to get the full month name
    let monthName = date.toLocaleDateString('en-US', options);

    return monthName;
}
let dt = new Date(2015, 10, 1);
console.log(full_month(dt)); // Output: "November"
