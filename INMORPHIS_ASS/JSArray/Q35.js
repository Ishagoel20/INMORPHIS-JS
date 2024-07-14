//Write a JavaScript function to get a random item from an array.

function getRandomItem(arr) {
    // Generate a random index
    const randomIndex = Math.floor(Math.random() * arr.length);
    
    // Return the random element
    return arr[randomIndex];
}

// Test data
const colors = ["Red", "Green", "Blue", "Yellow", "Orange"];

// Get a random color
console.log(getRandomItem(colors));
