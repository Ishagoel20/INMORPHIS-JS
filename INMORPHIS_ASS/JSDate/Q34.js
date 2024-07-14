/*Write a JavaScript function to get 24-hour format of an hour without leading 
zeros.
Test Data :
dt = new Date(1989, 10, 1);
console.log(hours_without_zeroes(dt));
0*/

function hours_without_zeroes(date) {
    // Get the hour (0-23)
    let hours = date.getHours();

    return hours;
}

// Example usage:
let dt = new Date(1989, 10, 1);
console.log(hours_without_zeroes(dt)); // Output: 0

dt = new Date(1989, 10, 1, 13); // 1 PM
console.log(hours_without_zeroes(dt)); // Output: 13
