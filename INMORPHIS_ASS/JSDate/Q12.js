/*Write a JavaScript function to get the minimum date from an array of dates.
Test Data :
console.log(min_date(['2015/02/01', '2015/02/02', '2015/01/03']));
Output :
"2015/01/03"*/

function min_date(dateArray) {
    // Convert date strings to Date objects
    let dates = dateArray.map(dateString => new Date(dateString));

    // Use reduce to find the minimum date
    let minDate = dates.reduce((min, current) => current < min ? current : min);

    // Format the minimum date as a string in 'YYYY/MM/DD' format
    return minDate.toISOString().split('T')[0];
}

console.log(min_date(['2015/02/01', '2015/02/02', '2015/01/03'])); // Output: "2015/01/03"
