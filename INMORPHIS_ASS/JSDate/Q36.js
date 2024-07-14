/*Write a JavaScript function to get seconds with leading zeros (00 through 
    59).
    Test Data :
    dt = new Date(1989, 10, 1);
    console.log(seconds_with_leading_zeros(dt));
    "00"*/

    function seconds_with_leading_zeros(date) {
        // Get the seconds (0-59)
        let seconds = date.getSeconds();
    
        // Add leading zeros if necessary
        let formattedSeconds = ('0' + seconds).slice(-2);
    
        return formattedSeconds;
    }
    
    // Example usage:
    let dt = new Date(1989, 10, 1);
    console.log(seconds_with_leading_zeros(dt)); // Output: "00"
    
    dt = new Date(1989, 10, 1, 13, 5, 9); // 1:05:09 PM
    console.log(seconds_with_leading_zeros(dt)); // Output: "09"
    