/*The Lifetime Supply Calculator
Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
 Write a function named calculateSupply that:
 takes 2 arguments: age, amount per day.
 calculates the amount consumed for rest of the life (based on a constant max age).
 outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
 Call that function three times, passing in different values each time.
 Bonus: Accept floating point values for amount per day, and round the result to a round number.*/

// Define the calculateSupply function
function calculateSupply(age, amountPerDay) {
    // Constants
    const maxAge = 80; // Assuming maximum age is 80 years

    // Calculate total amount needed
    let totalAmount = Math.round((maxAge - age) * 365 * amountPerDay);

    // Output the result
    console.log(`You will need ${totalAmount} to last you until the ripe old age of ${maxAge}`);
}

// Call calculateSupply function with different values
calculateSupply(30, 2); // Example 1: Age 30, 2 units per day
calculateSupply(25, 3.5); // Example 2: Age 25, 3.5 units per day
calculateSupply(40, 1.5); // Example 3: Age 40, 1.5 units per day
