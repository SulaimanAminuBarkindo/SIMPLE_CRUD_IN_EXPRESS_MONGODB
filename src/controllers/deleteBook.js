const Book = require('../models/Book')

exports.deleteBook = async (req, res) => {
  const books = await Book.deleteOne({ _id: req.body.id })

  res.json({ message: 'success', books })
}
