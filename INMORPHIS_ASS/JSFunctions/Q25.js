/*Write a JavaScript function that accept a list of country names as input and 
returns the longest country name as output.
Sample function : Longest_Country_Name(["Australia", "Germany", "United 
States of America"])
Expected output : "United States of America"*/

function Longest_Country_Name(countryNames) {
    // Initialize variables to store the longest country name and its length
    let longestName = '';
    let maxLength = 0;

    // Iterate through each country name in the array
    for (let i = 0; i < countryNames.length; i++) {
        // Check if the current country name is longer than the current longest
        if (countryNames[i].length > maxLength) {
            maxLength = countryNames[i].length;
            longestName = countryNames[i];
        }
    }

    return longestName;
}

// Example usage:
let countries = ["Australia", "Germany", "United States of America"];
let longestCountry = Longest_Country_Name(countries);
console.log(longestCountry); // Output: "United States of America"

