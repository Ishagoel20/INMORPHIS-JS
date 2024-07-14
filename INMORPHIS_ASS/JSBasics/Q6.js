//Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.


function isLeapYear(year) {
    
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

const year1 = 2020;
const year2 = 2021;
const year3 = 2000;
const year4 = 2100;

console.log(year1 + ' is a leap year: ' + isLeapYear(year1)); 
console.log(year2 + ' is a leap year: ' + isLeapYear(year2)); 
console.log(year3 + ' is a leap year: ' + isLeapYear(year3)); 
console.log(year4 + ' is a leap year: ' + isLeapYear(year4)); 













