const { Router } = require('express');
const {getBooks} = require('../controllers/booksControllers')
const router = Router()

router.get('/', getBooks)

module.exports = router