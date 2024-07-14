/*Write a JavaScript program to list the properties of a JavaScript object.
Sample object :
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };
Sample Output : name,sclass,rollno*/

var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

// Function to list properties of an object
function listProperties(obj) {
    // Get the keys of the object
    var keys = Object.keys(obj);
    
    // Join keys into a comma-separated string
    var propertyList = keys.join(',');
    
    // Return the comma-separated string of keys
    return propertyList;
}

// Call the function and display the output
var properties = listProperties(student);
console.log(properties);  // Output: name,sclass,rollno

