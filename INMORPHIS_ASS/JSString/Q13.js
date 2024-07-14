/*Write a JavaScript function to concatenates a given string n times (default is 
    1).
    Test Data :
    console.log(repeat('Ha!'));
    console.log(repeat('Ha!',2));
    console.log(repeat('Ha!',3));
    "Ha!"
    "Ha!Ha!"
    "Ha!Ha!Ha!"*/

    function repeat(str, n = 1) {
        let repeatedString = '';
        for (let i = 0; i < n; i++) {
            repeatedString += str;
        }
        return repeatedString;
    }
    
    // Test Data
    console.log(repeat('Ha!'));   // Output: "Ha!"
    console.log(repeat('Ha!', 2)); // Output: "Ha!Ha!"
    console.log(repeat('Ha!', 3)); // Output: "Ha!Ha!Ha!"
    