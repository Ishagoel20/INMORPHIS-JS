/*We have the following arrays :
color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
o = ["th","st","nd","rd"]
Write a JavaScript program to display the colors in the following way :
"1st choice is Blue ."
"2nd choice is Green."
"3rd choice is Red."
- - - - - - - - - - - - -
Note : Use ordinal numbers to tell their position.*/

let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
let o = ["th","st","nd","rd"];

function getOrdinalSuffix(num) {
    // Function to determine the correct ordinal suffix based on the number
    if (num >= 11 && num <= 13) {
        return "th";
    } else {
        let lastDigit = num % 10;
        return o[lastDigit];
    }
}

function displayColorChoices(colors) {
    // Function to display colors with their ordinal positions
    for (let i = 0; i < colors.length; i++) {
        let ordinal = getOrdinalSuffix(i + 1);
        console.log(`${i + 1}${ordinal} choice is ${colors[i]}.`);
    }
}

// Call the function to display the color choices
displayColorChoices(color);

