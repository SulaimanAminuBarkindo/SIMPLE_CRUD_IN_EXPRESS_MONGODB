const Book = require('../models/Book')

exports.updateBook = async (req, res) => {
  const id = req.body.id
  const updatedBook = await Book.updateOne({ _id: id }, { $set: { genre: req.body.genre } })

  res.json({ message: 'success', updatedBook })
}
