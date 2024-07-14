//Write a JavaScript program to get the integers in range (x, y). Example : range(2, 9)

function range(x, y) {
    let result = [];
    // Ensure x is less than y
    if (x >= y) {
        return result;
    }
    for (let i = x; i < y; i++) {
        result.push(i);
    }
    return result;
}

// Example usage:
let start = 2;
let end = 9;
let numbersInRange = range(start, end);
console.log(`Integers in range [${start}, ${end}):`, numbersInRange); // Output: Integers in range [2, 9): [2, 3, 4, 5, 6, 7, 8]

