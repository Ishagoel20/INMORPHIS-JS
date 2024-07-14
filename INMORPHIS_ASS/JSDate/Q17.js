/*Write a JavaScript function to convert a Unix timestamp to time.
Test Data :
console.log(days_passed(new Date(2015, 0, 15)));
15
console.log(days_passed(new Date(2015, 11, 14)));
348*/

function convertUnixTimestamp(timestamp) {
    // Create a new Date object
    let date = new Date(timestamp * 1000); // JavaScript Date uses milliseconds, so multiply by 1000

    // Extract the components of the date
    let hours = date.getHours();
    let minutes = "0" + date.getMinutes(); // add leading zero
    let seconds = "0" + date.getSeconds(); // add leading zero

    // Format the time
    let formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

    return formattedTime;
}
console.log(convertUnixTimestamp(1618749375)); // Output: "20:36:15"
