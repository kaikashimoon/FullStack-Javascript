const { Router } = require('express');
const {getBooks, createBooks, deleteBook} = require('../controllers/booksControllers')
const router = Router()

router.get('/', getBooks)
router.post('/', createBooks)
router.delete('/:id', deleteBook)

module.exports = router