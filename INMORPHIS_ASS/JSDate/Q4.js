/*Write a JavaScript function to get the month name from a particular date.
Test Data :
console.log(month_name(new Date("10/11/2009")));
console.log(month_name(new Date("11/13/2014")));
Output :
"October"
"November"*/

function month_name(date) {
    // Create an array of month names
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    // Use toLocaleString with 'en-US' locale to get the month name
    return date.toLocaleString('en-US', { month: 'long' });
}


console.log(month_name(new Date("10/11/2009")));  // Output: "October"
console.log(month_name(new Date("11/13/2014"))); // Output: "November"
