const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bookRouter = require('./src/routes/book')
const dotenv = require('dotenv').config()
const dotenvExpand = require('dotenv-expand')

dotenvExpand.expand(dotenv)
app.use(express.json())

mongoose.connect(process.env.DB_URL, (error) => {
  if (error) {
    console.log(error)
  } else {
    console.log('mongodb connected successfully')

    // start server after database connection is established
    app.listen(process.env.PORT, () => {
      console.log(`server started on port ${process.env.PORT}`)
    })
  }
})

app.use('/book', bookRouter)
