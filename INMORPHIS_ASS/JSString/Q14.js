/*Write a JavaScript function to insert a string within a string at a particular 
position (default is 1).
Test Data :
console.log(insert('We are doing some exercises.'));
console.log(insert('We are doing some exercises.','JavaScript '));
console.log(insert('We are doing some exercises.','JavaScript ',18));
"We are doing some exercises."
"JavaScript We are doing some exercises."
"We are doing some JavaScript exercises."*/

function insert(mainString, insertString = '', position = 0) {
    // Check if position is greater than the length of mainString
    if (position > mainString.length) {
        position = mainString.length;
    }
    
    // Insert insertString into mainString at the specified position
    return mainString.slice(0, position) + insertString + mainString.slice(position);
}

// Test Data
console.log(insert('We are doing some exercises.')); // Output: "We are doing some exercises."
console.log(insert('We are doing some exercises.', 'JavaScript ')); // Output: "JavaScript We are doing some exercises."
console.log(insert('We are doing some exercises.', 'JavaScript ', 18)); // Output: "We are doing some JavaScript exercises."

