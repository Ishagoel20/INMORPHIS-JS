/*Write a JavaScript function to test case insensitive (except special Unicode 
    characters) string comparison.
    Test Data :
    console.log(compare_strings('abcd', 'AbcD'));
    true
    console.log(compare_strings('ABCD', 'Abce'));
    false*/


    function compare_strings(str1, str2) {
        // Convert both strings to lowercase using locale-specific rules
        var lowerStr1 = str1.toLocaleLowerCase();
        var lowerStr2 = str2.toLocaleLowerCase();
    
        // Perform case-insensitive comparison with respect to special Unicode characters
        return lowerStr1 === lowerStr2;
    }
    
    // Test the function
    console.log(compare_strings('abcd', 'AbcD'));  // Output: true
    console.log(compare_strings('ABCD', 'Abce'));  // Output: false
    
    