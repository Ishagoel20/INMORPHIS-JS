/*Write a JavaScript function to swatch Internet time (000 through 999).
Test Data :
dt = new Date(1989, 10, 1);
console.log(internet_time(dt));
812*/

function internet_time(date) {
    // Get the current UTC time in milliseconds
    let utcMillis = date.getTime();

    // Calculate the number of beats
    let beats = Math.floor((utcMillis % (24 * 3600 * 1000)) / (1000 * 86.4));

    // Format the beats to three digits (pad with zeros if necessary)
    let beatsString = ('00' + beats).slice(-3);

    return beatsString;
}

// Example usage:
let dt = new Date(1989, 10, 1);
console.log(internet_time(dt)); // Output: "812"

