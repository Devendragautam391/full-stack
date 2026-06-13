import books from "./books.js";
import authors from "./authors.js";

let nextId = books.length +1

//list all books
export const getAllBooks =  (req, res) => {
    res.status(200).json({books});
};

//Get a specific book by ID
export const getBookById = (req, res) => {
    const id = (req.params.id);
    const book = books.find((a) => a.id === id);

    if (!book) {
        return res.status(404).json({ error: 'No book with this id' });
    }
    res.status(200).json({ book });
};

//filter books by author id
export const filterById = (req, res) => {
    const { authorId } = req.query;

    if (authorId) {
        let filteredBooks = books.filter(book => (book.authorId) === (authorId));
        res.status(200).json(filteredBooks);
    }
};

//Filter books by author name
export const filterByName = (req, res) => {
    const { authorName } = req.query;

    if (authorName) {
        const authorId = authors.find((a) => a.name === authorName).id
        const filteredBooks = books.filter(book => book.authorId === authorId);
        res.status(200).json(filteredBooks)
    }
};

//Add a new book
    export const addBook = (req, res) => {
        const newBook = {id: nextId++, ...req.body};
        books.push(newBook);
        res.status(201).json({newBook});
    };

//Update a book
    export const updateBook = (req, res) => {
        const id = (req.params.id);
        const book = books.find((a) => a.id === id);

        if (!book) {
            return res.status(404).json({message: 'No book with this id'});
        }

        Object.assign(book, req.body);
        res.status(200).json({book});
    };

//Delete a book
    export const deleteBook = (req, res) => {
        const id = (req.params.id);
        const index = books.findIndex((a) => a.id === id);

        if (index === -1) {
            return res.status(404).json({message: 'No book with this id'});
        }

        books.splice(index, 1);
        res.status(200).json({message: 'Book deleted successfully'});
};
