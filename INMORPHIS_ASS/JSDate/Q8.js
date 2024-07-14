/*Write a JavaScript function to get difference between two dates in days.
Test Data :
console.log(date_diff_indays('04/02/2014', '11/04/2014'));
console.log(date_diff_indays('12/02/2014', '11/04/2014'));
Output :
216
-28*/

function date_diff_indays(date1, date2) {
    // Convert both dates to Date objects
    let dt1 = new Date(date1);
    let dt2 = new Date(date2);

    // Calculate the difference in milliseconds
    let diff = Math.abs(dt1.getTime() - dt2.getTime());

    // Convert milliseconds difference to days
    return Math.ceil(diff / (1000 * 3600 * 24));
}

console.log(date_diff_indays('04/02/2014', '11/04/2014')); // Output: 216
console.log(date_diff_indays('12/02/2014', '11/04/2014')); // Output: -28
