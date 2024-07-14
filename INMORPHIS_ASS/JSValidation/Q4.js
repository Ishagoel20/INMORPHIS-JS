//Write a JavaScript program to search a date within a string.

function searchDateInString(str) {
    // Regular expression to match common date formats
    var dateRegex = /(?:\d{1,2}[\/.-]\d{1,2}[\/.-]\d{2,4})|(?:\d{2,4}[\/.-]\d{1,2}[\/.-]\d{1,2})|(?:\d{1,2}\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s\d{2,4})/gi;

    // Search for dates in the string
    var matches = str.match(dateRegex);

    // Return the matches found
    return matches;
}

// Test the function
var testString1 = 'Meeting scheduled on 01/20/2023 at 3:00 PM';
var testString2 = 'Birthdays: 12-31-2000 and 09.15.1998';
var testString3 = 'Event on 5 Sep 2022 is postponed.';

console.log(searchDateInString(testString1));  // Output: ["01/20/2023"]
console.log(searchDateInString(testString2));  // Output: ["12-31-2000", "09.15.1998"]
console.log(searchDateInString(testString3));  // Output: ["5 Sep 2022"]

