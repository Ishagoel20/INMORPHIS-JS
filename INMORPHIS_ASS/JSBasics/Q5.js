//Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front.


function rotateStringRight(inputString) {
    
    let chars = inputString.split('');

    let rotatedString = [];
    for (let i = 0; i < inputString.length; i++) {
        
        let lastChar = chars.pop();
        chars.unshift(lastChar);

        rotatedString.push(chars.join(''));
    }

    return rotatedString;
}

const inputString = 'w3resource';

const rotations = rotateStringRight(inputString);
rotations.forEach((rotation, index) => {
    console.log(`Rotation ${index + 1}: ${rotation}`);
});






