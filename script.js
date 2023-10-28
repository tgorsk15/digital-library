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

    // plan is to have the background color of the icon box
    // be a randomly generated color
    
    bookCard.textContent = `${bookName.value}, by ${authorName.value}
    \r\n# of pages: ${pagesNumber.value}
    \r\n Finished reading?: ${readBook.value}`;
    cardStorage.appendChild(bookCard);

    generateColor(bookIcon);
};


function addBookToLibrary(book) {
    myLibrary.push(book);
    console.log(myLibrary)
};

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

    bookForm.reset();
});


console.log('test')