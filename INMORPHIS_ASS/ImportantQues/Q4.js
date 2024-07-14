/*The Fortune Teller
Why pay a fortune teller when you can just program your fortune yourself?
 Write a function named tellFortune that:
 takes 4 arguments: number of children, partner's name, geographic location, job title.
 outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
 Call that function 3 times with 3 different values for the arguments.*/

// Define the tellFortune function
function tellFortune(numChildren, partnerName, location, jobTitle) {
    console.log(`You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${numChildren} kids.`);
}

// Call tellFortune function with different values
tellFortune(2, 'Alice', 'New York', 'software engineer');
tellFortune(3, 'Bob', 'Los Angeles', 'teacher');
tellFortune(1, 'Eve', 'San Francisco', 'doctor');
