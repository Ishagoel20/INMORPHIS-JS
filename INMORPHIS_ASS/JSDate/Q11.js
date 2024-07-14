/*Write a JavaScript function to get the maximum date from an array of dates.
Test Data :
console.log(max_date(['2015/02/01', '2015/02/02', '2015/01/03']));
Output :
"2015/02/02"*/

function max_date(dateArray) {
    // Convert date strings to Date objects
    let dates = dateArray.map(dateString => new Date(dateString));

    // Use reduce to find the maximum date
    let maxDate = dates.reduce((max, current) => current > max ? current : max);

    // Format the maximum date as a string in 'YYYY/MM/DD' format
    return maxDate.toISOString().split('T')[0];
}
console.log(max_date(['2015/02/01', '2015/02/02', '2015/01/03'])); // Output: "2015/02/02"
