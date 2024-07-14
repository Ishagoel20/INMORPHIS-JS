/*The Geometrizer
Create 2 functions that calculate properties of a circle, using the definitions here.
Create a function called calcCircumfrence :
 Pass the radius to the function.
 Calculate the circumference based on the radius, and output "The circumference is NN".
Create a function called calcArea :
 Pass the radius to the function.
 Calculate the area based on the radius, and output "The area is NN"*/

// Function to calculate circumference of a circle
function calcCircumference(radius) {
    // Calculate circumference using formula: C = 2 * π * radius
    let circumference = 2 * Math.PI * radius;
    console.log(`The circumference is ${circumference.toFixed(2)}`);
}

// Function to calculate area of a circle
function calcArea(radius) {
    // Calculate area using formula: A = π * radius^2
    let area = Math.PI * radius ** 2;
    console.log(`The area is ${area.toFixed(2)}`);
}

// Example usage:
calcCircumference(5); // Calculate circumference for a circle with radius 5
calcArea(5); // Calculate area for a circle with radius 5
