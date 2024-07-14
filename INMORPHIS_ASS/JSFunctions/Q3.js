//Write a JavaScript function that generates all combinations of a string. Example string : 'dog' Expected Output : d,do,dog,o,og,g


function generateCombinations(str) {
    let result = [];

    // Function to generate combinations recursively
    function generate(prefix, remaining) {
        for (let i = 0; i < remaining.length; i++) {
            result.push(prefix + remaining[i]); // Include current character

            // Recursively call generate with updated prefix and remaining characters
            generate(prefix + remaining[i], remaining.slice(i + 1));
        }
    }

    // Start with an empty prefix and the entire string as remaining characters
    generate('', str);

    return result;
}

// Example usage:
let inputString = 'dog';
let combinations = generateCombinations(inputString);
console.log("Combinations of '" + inputString + "':", combinations);












