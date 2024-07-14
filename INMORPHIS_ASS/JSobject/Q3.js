/*Write a JavaScript program to get the length of an JavaScript object.
Sample object :
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };*/

var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

// Get the keys of the object
var keys = Object.keys(student);

// Get the length (number of properties) of the object
var length = keys.length;

// Print the length of the object
console.log("Number of properties in the object:", length);
