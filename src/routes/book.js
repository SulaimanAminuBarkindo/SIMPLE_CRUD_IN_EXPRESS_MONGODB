const express = require('express')
const router = express.Router()
const createBook = require('../controllers/createBook')
const findBook = require('../controllers/findBook')
const updateBook = require('../controllers/updateBook')
const deleteBook = require('../controllers/deleteBook')

router.post('/create-book', createBook.createBook)
router.get('/find-book', findBook.findBook)
router.put('/update-book', updateBook.updateBook)
router.delete('/delete-book', deleteBook.deleteBook)

module.exports = router
