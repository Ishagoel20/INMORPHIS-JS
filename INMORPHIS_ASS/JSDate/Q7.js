/*Write a JavaScript function to test whether a date is a weekend.
Note : Use standard Saturday/Sunday definition of a weekend.
Test Data :
console.log(is_weekend('Nov 15, 2014'));
console.log(is_weekend('Nov 16, 2014'));
console.log(is_weekend('Nov 17, 2014'));
Output :
"weekend"
"weekend"
undefined*/

function is_weekend(dateString) {
    let date = new Date(dateString);
    let dayOfWeek = date.getDay();

    if (dayOfWeek === 0 || dayOfWeek === 6) {
        return "weekend";
    } else {
        return undefined; // or any other value or message you prefer for weekdays
    }
}

console.log(is_weekend('Nov 15, 2014'));  // Output: "weekend" (Saturday)
console.log(is_weekend('Nov 16, 2014'));  // Output: "weekend" (Sunday)
console.log(is_weekend('Nov 17, 2014'));  // Output: undefined (Monday)

