/*Write a JavaScript function to get English ordinal suffix for the day of the 
month, 2 characters (st, nd, rd or th.).
Test Data :
dt = new Date(2015, 10, 1);
console.log(english_ordinal_suffix(dt));
"1st"*/

function english_ordinal_suffix(date) {
    // Get the day of the month
    let dayOfMonth = date.getDate();

    // Determine the suffix based on the day of the month
    let suffix;
    if (dayOfMonth >= 11 && dayOfMonth <= 13) {
        suffix = 'th';
    } else {
        switch (dayOfMonth % 10) {
            case 1:
                suffix = 'st';
                break;
            case 2:
                suffix = 'nd';
                break;
            case 3:
                suffix = 'rd';
                break;
            default:
                suffix = 'th';
                break;
        }
    }

    // Combine the day of the month and the suffix
    return dayOfMonth + suffix;
}
let dt = new Date(2015, 10, 1);
console.log(english_ordinal_suffix(dt)); // Output: "1st"

