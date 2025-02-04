
//Write a JavaScript program to get the current date. 
//Expected Output : mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy


function getCurrentDate(format) {
    const currentDate = new Date();

    let day = currentDate.getDate();
    let month = currentDate.getMonth() + 1;
    let year = currentDate.getFullYear();

    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;

    
    switch (format) {
        case 'mm-dd-yyyy':
            return month + '-' + day + '-' + year;
        case 'mm/dd/yyyy':
            return month + '/' + day + '/' + year;
        case 'dd-mm-yyyy':
            return day + '-' + month + '-' + year;
        case 'dd/mm/yyyy':
            return day + '/' + month + '/' + year;
        default:
            return 'Invalid format';
    }
}

console.log("mm-dd-yyyy format: " + getCurrentDate('mm-dd-yyyy'));
console.log("mm/dd/yyyy format: " + getCurrentDate('mm/dd/yyyy'));
console.log("dd-mm-yyyy format: " + getCurrentDate('dd-mm-yyyy'));
console.log("dd/mm/yyyy format: " + getCurrentDate('dd/mm/yyyy'));












