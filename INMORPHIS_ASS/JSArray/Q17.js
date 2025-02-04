//Write a JavaScript program to shuffle an array

function shuffleArray(array) {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    // While there remain elements to shuffle
    while (currentIndex !== 0) {
        // Pick a remaining element
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // Swap it with the current element
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// Example usage:
let colors = ["Blue", "Green", "Red", "Orange", "Violet"];
let shuffledColors = shuffleArray(colors);
console.log("Shuffled array:", shuffledColors);
