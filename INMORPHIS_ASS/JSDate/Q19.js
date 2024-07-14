/*Write a JavaScript function to get the day of the month, 2 digits with leading 
zeros.
Test Data :
d= new Date(2015, 10, 1);
console.log(day_of_the_month(d));
"01"*/

function day_of_the_month(date) {
    // Get the day of the month
    let day = date.getDate();

    // Ensure the day is formatted with leading zeros if necessary
    let formattedDay = ('0' + day).slice(-2);

    return formattedDay;
}
let d = new Date(2015, 10, 1);
console.log(day_of_the_month(d)); // Output: "01"
