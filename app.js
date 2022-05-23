const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cluster = 'cluster0'
const dbName = 'BooksManagementDB'
const dbUsername = 'souleyMongoDB'
const dbPassword = 'Drsulaiman35'
const dbURI = `mongodb+srv://${dbUsername}:${dbPassword}@${cluster}.zjd9u.mongodb.net/${dbName}?retryWrites=true&w=majority`
const port = '3000'
const bookRouter = require('./src/routes/book')

app.use(express.json())

mongoose.connect(dbURI, (error) => {
  if (error) {
    console.log(error)
  } else {
    console.log('mongodb connected successfully')

    // start server after database connection is established
    app.listen(port, () => {
      console.log(`server started on port ${port}`)
    })
  }
})

app.use('/book', bookRouter)
