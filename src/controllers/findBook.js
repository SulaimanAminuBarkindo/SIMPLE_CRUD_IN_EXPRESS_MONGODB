const Book = require('../models/Book')

exports.findBook = async (req, res) => {
  const key = req.body.key
  const value = req.body.value
  const book = await Book.find({ [key]: value })

  res.json({ message: 'success', book })
}
