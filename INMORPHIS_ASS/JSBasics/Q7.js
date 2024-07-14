//Write a JavaScript program to find 1st January be a Sunday between 2014 and 2050.


function findFirstJanSunday() {
    for (let year = 2014; year <= 2050; year++) {
        
        let date = new Date(year, 0, 1); // Month is zero-based (0 for January)

        if (date.getDay() === 0) {
            return year;
        }
    }
    
    return -1;
}

const firstJanSundayYear = findFirstJanSunday();

if (firstJanSundayYear !== -1) {
    console.log(`The first January that falls on a Sunday between 2014 and 2050 is in the year ${firstJanSundayYear}.`);
} else {
    console.log('No such year found between 2014 and 2050 where January 1st is a Sunday.');
}






