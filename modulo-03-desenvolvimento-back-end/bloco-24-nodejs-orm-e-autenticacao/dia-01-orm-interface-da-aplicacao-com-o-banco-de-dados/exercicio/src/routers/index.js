const express = require('express');
const BooksRouter = require('./BooksRouter');

const router = express.Router();

router.use('/books', BooksRouter);

module.exports = router;
