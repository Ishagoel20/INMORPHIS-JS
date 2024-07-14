/*Write a JavaScript function to humanized number (Formats a number to a 
    human-readable string.) with the correct suffix such as 1st, 2nd, 3rd or 4th.
    Test Data :
    console.log(humanize_format());
    console.log(humanize_format(1));
    console.log(humanize_format(8));
    console.log(humanize_format(301));
    console.log(humanize_format(402));
    "1st"
    "8th"
    "301st"
    "402nd"*/

    function humanize_format(number) {
        if (typeof number === 'undefined') return '';
    
        var suffix = 'th';
        if (number % 100 !== 11 && number % 10 === 1) {
            suffix = 'st';
        } else if (number % 100 !== 12 && number % 10 === 2) {
            suffix = 'nd';
        } else if (number % 100 !== 13 && number % 10 === 3) {
            suffix = 'rd';
        }
    
        return number + suffix;
    }
    
    // Test Data
    console.log(humanize_format());   // Output: ""
    console.log(humanize_format(1));  // Output: "1st"
    console.log(humanize_format(8));  // Output: "8th"
    console.log(humanize_format(301)); // Output: "301st"
    console.log(humanize_format(402)); // Output: "402nd"
    