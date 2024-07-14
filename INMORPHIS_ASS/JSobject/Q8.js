/*Write a JavaScript program to create a Clock.
Note : The output will come every second.
Expected Console Output :
"14:37:42"
"14:37:43"
"14:37:44"
"14:37:45"
"14:37:46"
"14:37:47"*/

function displayClock() {
    // Get current time
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    // Format hours, minutes, and seconds to ensure two digits
    hours = formatTime(hours);
    minutes = formatTime(minutes);
    seconds = formatTime(seconds);

    // Display the time in "HH:MM:SS" format
    var timeString = hours + ":" + minutes + ":" + seconds;
    console.log(timeString);
}

function formatTime(time) {
    // Add leading zero to single digit numbers
    return (time < 10) ? "0" + time : time;
}

// Update the clock display every second
setInterval(displayClock, 1000);
