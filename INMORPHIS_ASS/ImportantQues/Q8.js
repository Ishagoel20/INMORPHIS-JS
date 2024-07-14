/*The Temperature Converter
It's hot out! Let's make a converter based on the steps here.
Create a function called celsiusToFahrenheit :
 Store a celsius temperature into a variable.
 Convert it to fahrenheit and output "NN°C is NN°F".
Create a function called fahrenheitToCelsius :
 Now store a fahrenheit temperature into a variable.
 Convert it to celsius and output "NN°F is NN°C.*/

// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    // Convert Celsius to Fahrenheit using the formula: °F = (°C × 9/5) + 32
    let fahrenheit = (celsius * 9 / 5) + 32;
    console.log(`${celsius}°C is ${fahrenheit.toFixed(2)}°F`);
}

// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    // Convert Fahrenheit to Celsius using the formula: °C = (°F - 32) × 5/9
    let celsius = (fahrenheit - 32) * 5 / 9;
    console.log(`${fahrenheit}°F is ${celsius.toFixed(2)}°C`);
}

// Example usage:
celsiusToFahrenheit(25); // Convert 25°C to Fahrenheit
fahrenheitToCelsius(77); // Convert 77°F to Celsius
