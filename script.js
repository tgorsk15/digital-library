// array to store only the book OBJECTS
const myLibrary = [];

function Book(bookName, authorName, pagesNumber, readBook) {
    this.bookName = bookName;
    this.authorName = authorName;
    this.pagesNumber = pagesNumber;
    this.readBook = readBook;
    // put 
}

function generateColor(item) {
    item.style.backgroundColor = 
    'hsl(' + 360 * Math.random() + ',' +
    (25 + 70 * Math.random()) + '%,' +
    (85 + 10 * Math.random()) + '%)'
}

// Book.prototype.checkReadBook = function() {
//     if (readBook === true) {
//         readButton.style.backgroundColor = 'rgb(120, 215, 120)'
//     }
// }

// reference to cards-holder section
const cardStorage = document.querySelector('.cards-holder')

Book.prototype.createCard = function() {
    console.log('test')
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
    // add in book icon container:
    const bookIcon = document.createElement('div');
    bookIcon.classList.add('book-icon');
    cardStorage.appendChild(bookIcon);

    //actual icon photo
    const bookPic = document.createElement('img');
    bookPic.src = "icons8-book-64.png"
    bookPic.classList.add('book-pic');
    bookIcon.appendChild(bookPic);

    
    bookCard.textContent = `${bookName.value}, by ${authorName.value}
    \r\n# of pages: ${pagesNumber.value}
    \r\n Finished reading?: ${readBook.value}`;
    cardStorage.appendChild(bookCard);

    // gives background a randomly generated light color
    generateColor(bookIcon);

    // delete book button on bookCard:
    const deleteBook = document.createElement('button');
    deleteBook.classList.add('delete-book');
    deleteBook.textContent = 'X'
    bookCard.appendChild(deleteBook);

    // book to toggle read or not read
    const readButton = document.createElement('button');
    readButton.classList.add('read-button');
    if (readBook.value === 'yes') {
        readButton.textContent = 'Read'
    } else if (readBook.value === 'no') {
        readButton.textContent = 'Not read'
    };
    bookCard.appendChild(readButton);

    
};


function addBookToLibrary(book) {
    myLibrary.push(book);
    console.log(myLibrary)
};


// Boolean value set up
// let bookIsRead = 0

// reference to add book form
const bookForm = document.getElementById('book-form');

const bookName = document.getElementById('book-name');
const authorName = document.getElementById('author-name');
const pagesNumber = document.getElementById('pages-number');
const readBook = document.getElementById('read-book');
// submit button that triggers a creation of an
// object based on the Book constructor
const addBook = document.querySelector('.add-book')
addBook.addEventListener('click', (event) => {
    event.preventDefault();
    
    // creates the new object with Book() as the prototype
    const book = new Book(bookName.value, authorName.value, pagesNumber.value,
        readBook.value)
    console.log(book)

    // adds the instance of book to myLibrary
    addBookToLibrary(book);
    
    book.createCard();

    // have to put in function to check whether book is read
    // depending on outcome, button will be changed

    // readBook must FIRST be converted into a Boolean value:
    // console.log(readBook.value)
    // if (readBook.value = 'Yes') {
    //     let bookIsRead = 1
    // } else if (readBook.value = 'No') {
    //     let bookIsRead = 0
    // };
    // console.log(bookIsRead);

    bookForm.reset();
});

// create an addEventListener for when read-button is clicked:
// readButton.addEventListener('click', () => {
//     console.log(readBook.value)
//     if (readBook.value = 'yes') {
//         readBook.value = 'no'
//         readButton.textContent = 'Not read'
//     } else if (readBook.value = 'no'){
//         readBook.value = 'yes'
//         readButton.textContent = 'Read'
//     };
// })

// create addEventListener for delete button


console.log('test')