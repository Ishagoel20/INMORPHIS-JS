/*Write a JavaScript function to get a short textual representation of a month, 
three letters (Jan through Dec).
Test Data :
dt = new Date(2015, 10, 1);
console.log(short_months(dt));
"Nov"*/

function short_months(date) {
    // Define an array of abbreviated month names
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    // Get the month index (0-11)
    let monthIndex = date.getMonth();

    // Return the abbreviated month name based on the month index
    return months[monthIndex];
}
let dt = new Date(2015, 10, 1);
console.log(short_months(dt)); // Output: "Nov"
