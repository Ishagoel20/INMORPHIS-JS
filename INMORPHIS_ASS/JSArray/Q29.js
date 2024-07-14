/*Write a JavaScript function to fill an array with values (numeric, string with 
    one character) on supplied bounds.
    Test Data :
    console.log(num_string_range('a', "z", 2));
    ["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]*/

    function num_string_range(start, end, step) {
        let result = [];
    
        // Convert characters to their ASCII codes if start and end are strings
        let current = typeof start === 'string' ? start.charCodeAt(0) : start;
        let last = typeof end === 'string' ? end.charCodeAt(0) : end;
    
        // If step is not provided, default to 1
        step = step || 1;
    
        // Generate array values based on numeric or character range
        while (current <= last) {
            result.push(typeof start === 'string' ? String.fromCharCode(current) : current);
            current += step;
        }
    
        return result;
    }
    
    // Example usage:
    console.log(num_string_range('a', 'z', 2));
    // Output: ["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]
    
    console.log(num_string_range(1, 10, 2));
    // Output: [1, 3, 5, 7, 9]
    
    console.log(num_string_range(5, 15));
    // Output: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    
    