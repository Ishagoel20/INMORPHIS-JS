/*Write a JavaScript function to get a full numeric representation of a year (4 
    digits).
    Test Data :
    dt = new Date(2015, 10, 1);
    console.log(full_year(dt));
    2015*/

    function full_year(date) {
        // Get the full year (4 digits)
        let year = date.getFullYear();
    
        return year;
    }
    let dt = new Date(2015, 10, 1);
    console.log(full_year(dt)); // Output: 2015
        