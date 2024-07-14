/*Write a JavaScript function that will return the number of minutes in hours 
and minutes.
Test Data :
console.log(timeConvert(200));
Output :
"200 minutes = 3 hour(s) and 20 minute(s)."*/

function timeConvert(minutes) {
    // Calculate hours and minutes
    let hours = Math.floor(minutes / 60);
    let remainingMinutes = minutes % 60;

    // Construct the output string
    let result = `${minutes} minutes = ${hours} hour(s)`;
    
    // Add "and" if there are remaining minutes
    if (remainingMinutes > 0) {
        result += ` and ${remainingMinutes} minute(s)`;
    }
    
    result += ".";

    return result;
}
console.log(timeConvert(200)); // Output: "200 minutes = 3 hour(s) and 20 minute(s)."
