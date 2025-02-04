/*Write a simple JavaScript program to join all elements of the following array 
into a string.
Sample array : myColor = ["Red", "Green", "White", "Black"];
Expected Output :
"Red,Green,White,Black"
"Red,Green,White,Black"
"Red+Green+White+Black"*/

// Sample array
let myColor = ["Red", "Green", "White", "Black"];

// Using join() with default comma separator
let result1 = myColor.join(',');
console.log(result1); // Output: "Red,Green,White,Black"

// Using join() with custom plus (+) separator
let result2 = myColor.join('+');
console.log(result2); // Output: "Red+Green+White+Black"

