/*The Age Calculator
Forgot how old you are? Calculate it!
 Write a function named calculateAge that:
 takes 2 arguments: birth year, current year.
 calculates the 2 possible ages based on those years.
 outputs the result to the screen like so: "You are either NN or NN"
 Call the function three times with different sets of values.
 Bonus: Figure out how to get the current year in JavaScript instead of passing it in.*/

// Define the calculateAge function
function calculateAge(birthYear, currentYear) {
    let age1 = currentYear - birthYear;
    let age2 = age1 - 1; // For the second possible age (if birthday hasn't happened yet)

    console.log(`You are either ${age1} or ${age2}`);
}

// Get the current year dynamically
let currentYear = new Date().getFullYear();

// Call calculateAge function with different sets of values
calculateAge(1990, currentYear);
calculateAge(1985, currentYear);
calculateAge(2000, currentYear);
