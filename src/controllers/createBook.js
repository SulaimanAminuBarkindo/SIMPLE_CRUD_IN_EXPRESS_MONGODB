const Book = require('../models/Book')

exports.createBook = async (req, res) => {
  const newBook = await Book.collection.insertOne(req.body)
  res.json({ message: 'success', newBook })
}
