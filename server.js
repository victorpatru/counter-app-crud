const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
require('dotenv').config
const PORT = 5001

const dbName = 'counter-app'

// Middleware
app.use(express.static("public"))

MongoClient.connect('mongodb+srv://user:user@cluster0.fsqbv1n.mongodb.net/?retryWrites=true&w=majority', { useUnifiedTopology: true })
    .then(client => {
        console.log(`Connected to ${dbName} Database`)
    })


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}.`)
})