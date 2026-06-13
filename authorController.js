import authors from "./authors.js";

let nextId = authors.length + 2

//list all authors
export const getAllAuthors =  (req, res) => {
    res.status(200).json(authors)};

//Get a specific author by id
export const getAuthorById = (req, res) => {
    const id = (req.params.id);
    const author = authors.find((a) => a.id === id);

    if (!author) {
        return res.status(404).json({ error: 'No author with this id' });
    }
    res.status(200).json(author);
};

//Add new author
export const addAuthor = (req, res) => {
    const newAuthor = { id: `a${nextId++}`, ...req.body };
    authors.push(newAuthor);
    res.status(201).json(newAuthor);
};

//Update an author
export const updateAuthor = (req, res) => {
    const id = (req.params.id);
    const author = authors.find((a) => a.id === id);

    if (!author) {
        return res.status(404).json({ message: 'No author with this id' });
    }

    Object.assign(author, req.body);
    res.status(200).json({ author });
};

//Delete an author
export const deleteAuthor = (req, res) => {
    const id = (req.params.id);
    const index = authors.findIndex((a) => a.id === id);

    if (index === -1) {
        return res.status(404).json({ message: 'No author with this id' });
    }

    authors.splice(index, 1);
    res.status(200).json({ message: 'Author deleted successfully' });
};