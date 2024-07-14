/*Write a JavaScript function to add specified minutes to a Date object.
Test Data :
console.log(add_minutes(new Date(2014,10,2), 30).toString());
Output :
"Sun Nov 02 2014 00:30:00 GMT+0530 (India Standard Time)"*/

function add_minutes(date, minutes) {
    // Create a new Date object to avoid modifying the original date
    let newDate = new Date(date);
    
    // Add specified minutes to the new Date object
    newDate.setMinutes(newDate.getMinutes() + minutes);
    
    // Return the new Date object
    return newDate;
}
console.log(add_minutes(new Date(2014, 10, 2), 30).toString());
