/*Write a JavaScript program to delete the rollno property from the following 
object. Also print the object before or after deleting the property.
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

// Print the object before deletion
console.log("Object before deletion:");
console.log(student);

// Delete the 'rollno' property
delete student.rollno;

// Print the object after deletion
console.log("\nObject after deleting 'rollno' property:");
console.log(student);
