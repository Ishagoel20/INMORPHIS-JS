//Write a JavaScript program to pass a 'JavaScript function' as parameter.

// Define a function that takes another function as parameter
function higherOrderFunction(func) {
    // Call the function passed as parameter
    func();
}

// Define a simple function to be passed as parameter
function greet() {
    console.log("Welcome to Inmorphis!!");
}

// Call the higher order function and pass the 'greet' function as parameter
higherOrderFunction(greet);

// Output: Hello, world!
