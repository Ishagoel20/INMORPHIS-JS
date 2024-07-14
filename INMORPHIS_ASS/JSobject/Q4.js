/*Write a JavaScript program to display the reading status (i.e. display book 
    name, author name and reading status) of the following books.
    var library = [ 
     {
     author: 'Bill Gates',
     title: 'The Road Ahead',
     readingStatus: true
     },
     {
     author: 'Steve Jobs',
     title: 'Walter Isaacson',
     readingStatus: true
     },
     {
     author: 'Suzanne Collins',
     title: 'Mockingjay: The Final Book of The Hunger Games', 
     readingStatus: false
     }];*/

     var library = [
        {
            author: 'Bill Gates',
            title: 'The Road Ahead',
            readingStatus: true
        },
        {
            author: 'Steve Jobs',
            title: 'Walter Isaacson',
            readingStatus: true
        },
        {
            author: 'Suzanne Collins',
            title: 'Mockingjay: The Final Book of The Hunger Games',
            readingStatus: false
        }
    ];
    
    // Function to display reading status
    function displayReadingStatus(library) {
        for (var i = 0; i < library.length; i++) {
            var book = library[i];
            var bookInfo = '"' + book.title + '" by ' + book.author + '.';
    
            if (book.readingStatus) {
                console.log('Already read:', bookInfo);
            } else {
                console.log('Not yet read:', bookInfo);
            }
        }
    }
    
    // Call the function to display reading status
    displayReadingStatus(library);
    