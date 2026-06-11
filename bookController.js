import books from "../model/book.models.ts";

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
        return res.status(404).json({ error: 'No author with this id' });
    }
    res.status(200).json({ book });
};

//filter books by author id and name
export const filterBooks = (req, res) => {
    let filteredBooks = books;

    const { authorId, authorName } = req.query;

    if (authorId) {
        filteredBooks = filteredBooks.filter(book => book.authorId === authorId);
    }

    if (authorName) {
        filteredBooks = filteredBooks.filter(book =>
            book.name.toLowerCase().includes(authorName.toLowerCase())
        );
    }
    res.status(200).json(filteredBooks);
};

//Add a new book
    export const addBook = (req, res) => {
        const newBook = {id: nextId++, ...req.body};
        books.push(newBook);
        res.status(201).json(newBook);
    };

//Update an author
    export const updateBook = (req, res) => {
        const id = (req.params.id);
        const book = books.find((a) => a.id === id);

        if (!book) {
            return res.status(404).json({message: 'No author with this id'});
        }

        Object.assign(book, req.body);
        res.status(200).json({book});
    };

//Delete an author
    export const deleteBook = (req, res) => {
        const id = (req.params.id);
        const index = books.findIndex((a) => a.id === id);

        if (index === -1) {
            return res.status(404).json({message: 'No author with this id'});
        }

        books.splice(index, 1);
        res.status(200).json({message: 'Author deleted successfully'});
}