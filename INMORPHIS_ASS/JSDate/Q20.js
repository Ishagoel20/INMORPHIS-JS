/*Write a JavaScript function to get a textual representation of a day (three 
    letters, Mon through Sun).
    Test Data :
    dt = new Date(2015, 10, 1);
    console.log(short_Days(dt));
    "Sun"*/

    function short_Days(date) {
        // Define an array of abbreviated day names
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    
        // Get the day index from the Date object (0 for Sunday, 1 for Monday, ..., 6 for Saturday)
        let dayIndex = date.getDay();
    
        // Return the abbreviated day name based on the day index
        return days[dayIndex];
    }
    let dt = new Date(2015, 10, 1);
    console.log(short_Days(dt)); // Output: "Sun"
        