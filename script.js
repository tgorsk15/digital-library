// array to store only the book OBJECTS
const myLibrary = [];

function Book(name, author, pages, isRead) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}


// adding the contents and styling of the card
// to the bookshelf.
// this is where name, author, etc info is used...
function addBookToLibrary() {

};

// submit button that triggers a creation of an
// object base don the Book constructor
const addBook = document.querySelector('.add-book')
addBook.addEventListener('click', () => {
    
});