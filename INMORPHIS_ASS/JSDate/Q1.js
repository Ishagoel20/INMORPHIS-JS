/*Write a JavaScript function to check whether an `input` is a date object or not.
Test Data :
console.log(is_date("October 13, 2014 11:13:00"));
console.log(is_date(new Date(86400000)));
console.log(is_date(new Date(99,5,24,11,33,30,0)));
console.log(is_date([1, 2, 4, 0]));
Output :
false
true
true
false*/

function is_date(input) {
    // Check if input is of type Date and is valid
    return input instanceof Date && !isNaN(input);
}


console.log(is_date("October 13, 2014 11:13:00"));  // false
console.log(is_date(new Date(86400000)));           // true
console.log(is_date(new Date(99, 5, 24, 11, 33, 30, 0)));  // true
console.log(is_date([1, 2, 4, 0]));                 // false
