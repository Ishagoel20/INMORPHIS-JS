/*The Movie Database
It's like IMDB, but much much smaller!
 Create an object to store the following information about your favorite movie: title (a 
string), duration (a number), and stars (an array of strings).
 Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 
minutes. Stars: Puff, Jackie, Living Sneezes."*/

// Define the movie object
let favoriteMovie = {
    title: "Puff the Magic Dragon",
    duration: 30, // in minutes
    stars: ["Puff", "Jackie", "Living Sneezes"]
};

// Function to print movie information
function printMovieInfo(movie) {
    let starsList = movie.stars.join(', '); // Convert stars array to a comma-separated string
    console.log(`${movie.title} lasts for ${movie.duration} minutes. Stars: ${starsList}.`);
}

// Call the function with the favoriteMovie object
printMovieInfo(favoriteMovie);
