// array to store only the book OBJECTS
const myLibrary = [];

function Book(name, author, pages, isRead) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    // put 
}


// adding the contents and styling of the card
// to the bookshelf.
// this is where name, author, etc info is used...
function addBookToLibrary(book) {
    myLibrary.push(book);
    console.log(myLibrary)
};



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
    const book = new Book(bookName, authorName, pagesNumber,
        readBook)
    console.log(book)

    addBookToLibrary(book)
});

console.log('test')