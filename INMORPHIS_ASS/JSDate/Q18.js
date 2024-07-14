/*Write a JavaScript program to calculate age.
Test Data :
console.log(calculate_age(new Date(1982, 11, 4)));
32
console.log(calculate_age(new Date(1962, 1, 1)));
53*/

function calculate_age(birthDate) {
    // Get the current date
    let currentDate = new Date();

    // Calculate the difference in years
    let age = currentDate.getFullYear() - birthDate.getFullYear();

    // Adjust the age based on the month and day of the current date
    // If the birthday for this year has not occurred yet, subtract 1 from age
    if (currentDate.getMonth() < birthDate.getMonth() ||
        (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}
console.log(calculate_age(new Date(1982, 11, 4))); // Output: 32 (Assuming current date is after December 4th, 2022)
console.log(calculate_age(new Date(1962, 1, 1))); // Output: 53 (Assuming current date is after February 1st, 2022)

