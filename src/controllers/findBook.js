const Book = require('../models/Book')

exports.findBook = async (req, res) => {
  const key = req.body.key
  const value = req.body.value

  // vheck if the req.body is empty
  if (!Object.keys(req.body).length) {
    res.json({ message: 'error empty request' })
  } else {
    const book = await Book.find({ [key]: value })
    res.json({ message: 'success', book })
  }
}
