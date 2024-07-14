//Write a JavaScript program to calculate days left until next Christmas.


function daysUntilNextChristmas() {
    const today = new Date();
    const currentYear = today.getFullYear();
    const christmas = new Date(currentYear, 11, 25); 


    if (today.getMonth() === 11 && today.getDate() > 25) {
        christmas.setFullYear(currentYear + 1);
    }
    const difference = christmas.getTime() - today.getTime();


    const daysLeft = Math.ceil(difference / (1000 * 60 * 60 * 24));

    return daysLeft;
}

const daysLeft = daysUntilNextChristmas();

console.log(`There are ${daysLeft} days left until Christmas.`);





