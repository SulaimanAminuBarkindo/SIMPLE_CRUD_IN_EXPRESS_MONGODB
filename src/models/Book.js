const mongoose = require('mongoose')
const { Schema, model } = mongoose

const bookSchema = new Schema({
  title: String,
  author: String,
  genre: String,
  ISBN: String
}, { strictQuery: false })
// make it false to avoid unexisting properties from
// being converted to empty and querying with empty

const Book = model('Book', bookSchema)

module.exports = Book
