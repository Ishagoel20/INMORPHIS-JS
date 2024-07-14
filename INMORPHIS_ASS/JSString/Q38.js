/*Write a JavaScript function to create a case-insensitive search.
Test Data :
console.log(case_insensitive_search('JavaScript Exercises', 'exercises'));
"Matched"
console.log(case_insensitive_search('JavaScript Exercises', 'Exercises'));
"Matched"
console.log(case_insensitive_search('JavaScript Exercises', 'Exercisess'));
"Not Matched"*/

function case_insensitive_search(str, searchStr) {
    // Convert both strings to lowercase
    var lowerStr = str.toLocaleLowerCase();
    var lowerSearchStr = searchStr.toLocaleLowerCase();

    // Perform case-insensitive search
    if (lowerStr.includes(lowerSearchStr)) {
        return "Matched";
    } else {
        return "Not Matched";
    }
}

// Test the function
console.log(case_insensitive_search('JavaScript Exercises', 'exercises'));   // Output: "Matched"
console.log(case_insensitive_search('JavaScript Exercises', 'Exercises'));   // Output: "Matched"
console.log(case_insensitive_search('JavaScript Exercises', 'Exercisess'));  // Output: "Not Matched"
