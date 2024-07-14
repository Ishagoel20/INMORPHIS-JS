//Write a JavaScript program to calculate the area and perimeter of a circle.Note : Create two methods to calculate the area and perimeter. The radius of the circle will be supplied by the user.

// Function to calculate the area of a circle
function calculateArea(radius) {
    return Math.PI * radius * radius;
}

// Function to calculate the perimeter (circumference) of a circle
function calculatePerimeter(radius) {
    return 2 * Math.PI * radius;
}

// Example usage:
// Prompt user to enter the radius
var radius = parseFloat(prompt("Enter the radius of the circle:"));

// Calculate area and perimeter
var area = calculateArea(radius);
var perimeter = calculatePerimeter(radius);

// Display the results
console.log("Radius of the circle:", radius);
console.log("Area of the circle:", area.toFixed(2)); // Round to 2 decimal places
console.log("Perimeter of the circle:", perimeter.toFixed(2)); // Round to 2 decimal places
