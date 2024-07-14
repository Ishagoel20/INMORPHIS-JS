/*Write a JavaScript function to chop a string into chunks of a given length.
Test Data :
console.log(string_chop('w3resource'));
console.log(string_chop('w3resource',2));
console.log(string_chop('w3resource',3));
["w3resource"]
["w3", "re", "so", "ur", "ce"]
["w3r", "eso", "urc", "e"]*/

function string_chop(str, chunkSize = 1) {
    if (chunkSize <= 0) {
        throw new Error('Chunk size must be greater than 0');
    }

    var chunks = [];
    for (var i = 0; i < str.length; i += chunkSize) {
        chunks.push(str.slice(i, i + chunkSize));
    }

    return chunks;
}

// Test Data
console.log(string_chop('w3resource')); // Output: ["w3resource"]
console.log(string_chop('w3resource', 2)); // Output: ["w3", "re", "so", "ur", "ce"]
console.log(string_chop('w3resource', 3)); // Output: ["w3r", "eso", "urc", "e"]

