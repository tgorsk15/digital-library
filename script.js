// array to store only the book OBJECTS
const myLibrary = [];

function Book(name, author, pages, isRead) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    // put 
}


function addBookToLibrary(book) {
    myLibrary.push(book);
    console.log(myLibrary)
};

// reference to add book form
const bookForm = document.getElementById('book-form');


// submit button that triggers a creation of an
// object based on the Book constructor
const addBook = document.querySelector('.add-book')
addBook.addEventListener('click', (event) => {
    event.preventDefault();
    // when pressed, book must be added to 'myLibrary'
    // a new object based on Book() must be created
    const bookName = document.getElementById('book-name');
    const authorName = document.getElementById('author-name');
    const pagesNumber = document.getElementById('pages-number');
    const readBook = document.getElementById('read-book');
    
    // creates the new object with Book() as the prototype
    const book = new Book(bookName.value, authorName.value, pagesNumber.value,
        readBook.value)
    console.log(book)

    addBookToLibrary(book);
    createCard(book);
    bookForm.reset();
});

// reference to cards-holder section
const cardStorage = document.querySelector('.cards-holder')

function createCard(book) {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
    // problem: Coming up as 'undefined' for the below
    bookCard.textContent = `This is a test for ${book.bookName}`;
    cardStorage.appendChild(bookCard);
}

console.log('test')