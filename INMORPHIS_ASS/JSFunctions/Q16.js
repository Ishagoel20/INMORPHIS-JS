//Write a JavaScript function to extract unique characters from a string.Example string : "thequickbrownfoxjumpsoverthelazydog"Expected Output : "thequickbrownfxjmpsvlazydg"

function extractUniqueCharacters(str) {
    
    let seen = new Set();
    
    let result = [];

    for (let char of str) {
        if (!seen.has(char)) {
            seen.add(char);
            result.push(char);
        }
    }

    return result.join("");
}


let str = "thequickbrownfoxjumpsoverthelazydog";
console.log(extractUniqueCharacters(str));  
