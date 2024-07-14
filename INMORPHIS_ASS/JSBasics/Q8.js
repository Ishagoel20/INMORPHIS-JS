//Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched".


function playNumberGuessingGame() {
    
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    const userGuess = parseInt(prompt('Guess a number between 1 and 10:'));

    
    if (!isNaN(userGuess) && userGuess >= 1 && userGuess <= 10) {
        if (userGuess === randomNumber) {
            alert('Good Work! You guessed the correct number.');
        } else {
            alert(`Not matched. The correct number was ${randomNumber}.`);
        }
    } else {
        alert('Please enter a valid number between 1 and 10.');
    }
}

playNumberGuessingGame();




















