/*Write a JavaScript function to print an integer with commas as thousands 
separators.
Test Data :
console.log(thousands_separators(1000));
"1,000"
console.log(thousands_separators(10000.23));
"10,000.23"
console.log(thousands_separators(100000));
"100,000"*/

function thousands_separators(number) {
    // Convert number to string
    let numberStr = number.toString();
    
    // Split the integer and decimal parts (if any)
    let parts = numberStr.split('.');
    
    // Regex to match groups of three digits
    let regExp = /(\d)(?=(\d{3})+(?!\d))/g;
    
    // Add commas to the integer part
    parts[0] = parts[0].replace(regExp, '$1,');
    
    // Join the integer and decimal parts (if any)
    return parts.join('.');
}

// Test cases
console.log(thousands_separators(1000));     // "1,000"
console.log(thousands_separators(10000.23)); // "10,000.23"
console.log(thousands_separators(100000));   // "100,000"
console.log(thousands_separators(123456789)); // "123,456,789"
console.log(thousands_separators(123));      // "123"
