/*Write a JavaScript program which returns a subset of a string.
Sample Data : dog
Expected Output : ["d", "do", "dog", "o", "og", "g"]*/

function generateSubstrings(str) {
    var result = [];
    var len = str.length;

    // Iterate through each character in the string
    for (var i = 0; i < len; i++) {
        // Generate substrings starting from character i
        for (var j = i + 1; j <= len; j++) {
            result.push(str.slice(i, j));
        }
    }

    return result;
}

// Example usage:
var inputString = "dog";
var substrings = generateSubstrings(inputString);
console.log(substrings);

