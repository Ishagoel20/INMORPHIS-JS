/*Write a JavaScript function to get the quarter (1 to 4) of the year.
Test Data :
console.log(quarter_of_the_year(new Date(2015, 1, 21)));
2
console.log(quarter_of_the_year(new Date(2015, 10, 18)));
4*/

function quarter_of_the_year(date) {
    // Get the month from the date (0 - January, 1 - February, ..., 11 - December)
    let month = date.getMonth();

    // Determine the quarter based on the month
    if (month >= 0 && month <= 2) {
        return 1; // January to March is Q1
    } else if (month >= 3 && month <= 5) {
        return 2; // April to June is Q2
    } else if (month >= 6 && month <= 8) {
        return 3; // July to September is Q3
    } else {
        return 4; // October to December is Q4
    }
}
console.log(quarter_of_the_year(new Date(2015, 1, 21))); // Output: 2 (February is in Q2)
console.log(quarter_of_the_year(new Date(2015, 10, 18))); // Output: 4 (November is in Q4)

