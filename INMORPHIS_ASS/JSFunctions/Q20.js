//Write a JavaScript function that generates a string id (specified length) of random characters.Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

function generateRandomString(length, charList) {
    let result = '';
    const charListLength = charList.length;

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charListLength);
        result += charList[randomIndex];
    }

    return result;
}


const characterList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const idLength = 10;

let randomId = generateRandomString(idLength, characterList);
console.log(randomId);  
