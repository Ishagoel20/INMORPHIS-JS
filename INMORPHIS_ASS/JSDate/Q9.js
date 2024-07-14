/*Write a JavaScript function to get the last day of a month.
Test Data :
console.log(lastday(2014,0));
console.log(lastday(2014,1));
console.log(lastday(2014,11));
Output :
31
28
31*/

function lastday(year, month) {
    // Create a new Date object for the next month's first day
    let lastDay = new Date(year, month + 1, 0).getDate();
    
    return lastDay;
}
console.log(lastday(2014, 0));  // Output: 31 (January)
console.log(lastday(2014, 1));  // Output: 28 (February, non-leap year)
console.log(lastday(2014, 11)); // Output: 31 (December)
