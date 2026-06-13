import express from "express";

import {
    getAllBooks,
    getBookById,
    filterById,
    filterByName,
    addBook,
    updateBook,
    deleteBook
} from './bookController.js';

const router = express.Router()

router.get('/', getAllBooks);
router.get('/filterbyid', filterById);
router.get('/filterbyname', filterByName);
router.get('/:id', getBookById);
router.post('/', addBook);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);
export default router;